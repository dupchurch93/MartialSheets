import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useState } from "react";

const LoggedOutSplash = ({ authenticated, setAuthenticated }) => {
  const [loginShown, setLoginShown] = useState(true);

  return (
    <div className="pageContent">
      {loginShown ? <LoginForm  authenticated={authenticated} setAuthenticated={setAuthenticated}></LoginForm> : <SignUpForm  authenticated={authenticated} setAuthenticated={setAuthenticated}></SignUpForm>}
    </div>
  );
};

export default LoggedOutSplash;
