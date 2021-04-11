import { ChangeEvent, FormEvent, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/user.actions";
import style from "./Login.page.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const handleUserNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setUserName(ev.currentTarget.value);
  };

  const login = () => {
    dispatch(setUser(userName));
  };

  const handleFormSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!userName.length) return;

    login();
  };

  return (
    <Container className="d-flex justify-content-center h-100 align-items-center">
      <div className={[style["login-card"], "p-4"].join(" ")}>
      <Col>
          <Row>
            <h4 className="font-weight-bold">Welcome to CodeLeap network!</h4>
          </Row>

          <Row className="mt-3">
            <Form onSubmit={handleFormSubmit} className="w-100">
              <Form.Group>
                <Form.Label>Please enter your username</Form.Label>
                <Form.Control
                  onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                    handleUserNameChange(ev)
                  }
                  value={userName}
                  type="text"
                  placeholder="John Doe"
                />
              </Form.Group>
            </Form>
          </Row>
          <Row className="justify-content-end">
            <Button
              disabled={!userName.length}
              variant="dark"
              className="br-0"
              onClick={login}
            >
              Enter
            </Button>
          </Row>
        </Col>
      </div>
    </Container>
  );
};

export default LoginPage;
