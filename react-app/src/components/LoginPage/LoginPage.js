import LoginForm from "../LoginForm/LoginForm";

const LoginPage = ({ authenticated, setAuthenticated }) => {

  return (
    <div className="pageContent">
      <LoginForm  authenticated={authenticated} setAuthenticated={setAuthenticated}></LoginForm>
    </div>
  );
};

export default LoginPage;
