import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useState } from "react";

const LoggedOutSplash = ({ authenticated }) => {
  const [loginShown, setLoginShown] = useState(true);

  return (
    <div className="pageContent">
      {loginShown ? <LoginForm></LoginForm> : <SignUpForm></SignUpForm>}
    </div>
  );
};

export default LoggedOutSplash;
