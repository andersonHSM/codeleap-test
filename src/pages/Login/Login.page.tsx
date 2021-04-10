import { useDispatch } from "react-redux";
import { setUser } from "../../actions/user.actions";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setUser())}>login</button>
    </div>
  );
};

export default LoginPage;
