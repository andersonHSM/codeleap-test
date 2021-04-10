import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route, useHistory } from "react-router";
import "./App.css";
import LoginPage from "./pages/Login/Login.page";
import PostsPage from "./pages/Posts.page";

function App(props: any) {
  const browserHistory = useHistory();

  const isUserLoggedIn = useSelector(
    (state: any) => state.userReducer.isLoggedIn
  );

  useEffect(() => {
    if (!isUserLoggedIn) {
      browserHistory.push("/login");
    } else {
      browserHistory.push("/posts");
    }
  }, [isUserLoggedIn, browserHistory]);

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
