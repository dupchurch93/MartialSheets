import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpPage = ({ authenticated, setAuthenticated }) => {

  return (
    <div className="pageContent">
      <SignUpForm  authenticated={authenticated} setAuthenticated={setAuthenticated}></SignUpForm>
    </div>
  );
};

export default SignUpPage;
