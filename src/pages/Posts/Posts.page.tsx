import { Button, Col, Container, Form } from "react-bootstrap";
import { createPost, fetchPosts } from "../../actions/post.actions";
import { useAppSelector } from "../../hooks/store.hooks";

import style from "./Posts.page.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PostComponent from "../../components/Post/Post.component";

const PostsPage = () => {
  const posts = useAppSelector((state) => state.postsReducer.posts);
  const username = useAppSelector((state) => state.userReducer.username);

  const appDispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    appDispatch(fetchPosts({ offset }));
  }, [appDispatch, offset]);

  const dispatchCreatePost = () => {
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;

    appDispatch(createPost({ username, title, content }));

    titleRef.current!.value = '';
    contentRef.current!.value = '';
  };

  return (
    <Container className="d-flex ">
      <Col className="align-items-center p-0">
        <header
          className={[
            style["posts-page-header"],
            "d-flex p-4 w-100 align-items-center",
          ].join(" ")}
        >
          <h3 className={style["posts-page-header--title"]}>
            CodeLeap Network
          </h3>
        </header>
        <div className={[style["posts-page-body"], "p-4"].join(" ")}>
          <div
            className={[
              style["content-wrapper"],
              "mx-auto",
              "p-4",
              "d-flex",
              "flex-column",
            ].join(" ")}
          >
            <h2>What's in your mind?</h2>
            <div className="mt-3">
              <Form className="w-100">
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    ref={titleRef}
                    type="text"
                    placeholder="Hello World"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <Form className="w-100">
                <Form.Group>
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    ref={contentRef}
                    as="textarea"
                    type="text"
                    placeholder="Content henre"
                  />
                </Form.Group>
              </Form>
            </div>

            <div className="d-flex justify-content-end">
              <Button
                variant="dark"
                className="br-0"
                onClick={dispatchCreatePost}
              >
                Create
              </Button>
            </div>
          </div>

          {posts.map((post) => {
            return <PostComponent key={post.id} post={post} />;
          })}
        </div>
      </Col>
    </Container>
  );
};

export default PostsPage;
