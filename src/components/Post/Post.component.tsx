import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../../actions/post.actions";
import Post from "../../models/posts/post.model";
import getDateDifferenceString from "../../utils/get-date-difference-string";

import style from "./Post.component.module.css";

const PostComponent = ({ post }: { post: Post }) => {
  const { id, username, content, created_datetime, title } = post;

  const appDispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [titleEdit, setTitleEdit] = useState("");
  const [contentEdit, setContentEdit] = useState("");

  const handleEditModalShow = () => {
    setTitleEdit(title);
    setContentEdit(content);

    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setTitleEdit("");
    setContentEdit("");

    setShowEditModal(false);
  };

  const handleDeleteModalShow = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleConfirmDeletePost = () => {
    appDispatch(deletePost({ id }));
    handleCloseDeleteModal();
  };

  const handlePostEdit = () => {
    appDispatch(editPost({ id, title: titleEdit, content: contentEdit }));
    handleCloseEditModal();
  };

  return (
    <>
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
            <span>{title}</span>

            <div>
              <button
                onClick={handleDeleteModalShow}
                className={[style["post-header--action-button"]].join(" ")}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                onClick={handleEditModalShow}
                className={[style["post-header--action-button"], "ml-4"].join(
                  " "
                )}
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
              <span>@{username}</span>
              <span> {getDateDifferenceString(created_datetime)}</span>
            </div>

            <div className={[style["post-body--content"], "mt-5"].join(" ")}>
              {content}
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={showEditModal}
        centered
        onHide={handleCloseEditModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(ev) => ev.preventDefault()}>
            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={titleEdit}
                  onChange={(ev) => setTitleEdit(ev.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  placeholder="Content here"
                  value={contentEdit}
                  onChange={(ev) => setContentEdit(ev.target.value)}
                />
              </Form.Group>

              <div className="d-flex flex-row justify-content-end">
                <Button
                  onClick={handlePostEdit}
                  variant="dark"
                  className="br-0"
                >
                  SAVE
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} size="lg" onHide={handleCloseDeleteModal}>
        <Modal.Header>
          <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-end">
            <Button
              onClick={handleCloseDeleteModal}
              variant="outline-dark br-0"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmDeletePost}
              variant="outline-dark br-0"
              className="ml-2"
            >
              Ok
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostComponent;
