import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addPost } from "../../actions/post.actions";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import style from "./Posts.page.module.css";

const PostsPage = () => {
  const posts = useAppSelector((state) => state.postsReducer.posts);
  const appDispatch = useAppDispatch();

  return (
    <Container className="d-flex ">
      <Col className="align-items-center p-0">
        <div
          className={[
            style["posts-page-header"],
            "d-flex p-4 w-100 align-items-center",
          ].join(" ")}
        >
          <h3 className={style["posts-page-header--title"]}>
            CodeLeap Network
          </h3>
        </div>
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
                  <Form.Control type="text" placeholder="Hello World" />
                </Form.Group>
              </Form>
            </div>
            <div className="mt-3">
              <Form className="w-100">
                <Form.Group>
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    placeholder="Content henre"
                  />
                </Form.Group>
              </Form>
            </div>

            <div className="d-flex justify-content-end">
              <Button variant="dark" className="br-0">
                Create
              </Button>
            </div>
          </div>

          {new Array(10).fill("").map(() => {
            return (
              <div
                className={[
                  style["content-wrapper"],
                  "mx-auto",
                  "mt-4",
                  "d-flex",
                  "flex-column",
                ].join(" ")}
              >
                <div className={[style["post"]].join(" ")}>
                  <div
                    className={[
                      style["post-header"],
                      "p-4",
                      "d-flex",
                      "justify-content-between",
                    ].join(" ")}
                  >
                    <span>Header</span>

                    <div>
                      <button
                        className={[style["post-header--action-button"]].join(
                          " "
                        )}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        className={[
                          style["post-header--action-button"],
                          "ml-4",
                        ].join(" ")}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </div>
                  </div>

                  <div
                    className={[
                      style["post-body"],
                      "p-4",
                      "d-flex",
                      "flex-column",
                    ].join(" ")}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <span>@Victor</span>
                      <span> 25 minute ago</span>
                    </div>

                    <div className={[style["post-body--content"], 'mt-5'].join(" ")}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla felis metus, lobortis in pulvinar id, auctor at
                      diam. Morbi eget tellus purus. Nunc auctor venenatis
                      vehicula. Ut elementum lorem at turpis venenatis
                      tincidunt. Proin et rutrum diam, sit amet interdum erat.
                      Vivamus hendrerit massa at lorem ullamcorper pretium.
                      Nullam dictum enim non sapien pulvinar, pellentesque
                      maximus arcu vehicula. Donec vitae turpis ultricies,
                      gravida felis id, efficitur enim. Fusce viverra leo vitae
                      neque sodales dignissim. Mauris eget risus tristique,
                      varius erat id, posuere velit. Sed euismod ac est at
                      ullamcorper. Phasellus semper dui placerat dui luctus, vel
                      mattis ex molestie. Aliquam sagittis magna vitae risus
                      egestas egestas. <br/> <br/>Pellentesque rutrum tempor ante eget
                      suscipit. Fusce euismod risus varius nulla venenatis, non
                      laoreet orci molestie. Aenean fermentum ante nec mattis
                      tincidunt. Etiam tempus malesuada libero, eu varius tellus
                      faucibus non. Pellentesque est erat, tristique vel viverra
                      id, tincidunt at eros. Nam elementum lectus id nisi
                      volutpat scelerisque sed id lacus. Vestibulum sem orci,
                      faucibus eu luctus non, viverra a magna. In vel molestie
                      mauris, ut commodo nisi. Curabitur fermentum molestie
                      lacus, nec luctus nisl porta sed. Sed eu enim ut purus
                      vehicula lacinia. Nunc venenatis nulla vel cursus porta.
                      Aenean quis justo sodales, bibendum erat sit amet,
                      consequat nulla. Cras rutrum turpis vehicula aliquet
                      ornare. Nulla aliquam nisi eu efficitur sodales. Maecenas
                      et metus ultrices, maximus leo et, volutpat quam. Quisque
                      ullamcorper, ipsum sed dapibus condimentum, erat risus
                      facilisis turpis, a dapibus nunc augue sit amet arcu. Sed
                      tortor dolor, condimentum at leo sit amet, ultricies
                      faucibus turpis.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Col>
    </Container>
  );
};

export default PostsPage;
