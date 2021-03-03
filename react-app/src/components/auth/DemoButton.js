import { login } from "../../services/auth";

const DemoButton = ({setAuthenticated}) => {
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login("demo@aa.io", "password");
    if(user){
        setAuthenticated(true)
    }
  };
  return (
    <button
      className="m-2 p-2 rounded-lg border-2 border-gray-800 font-bold leading-tight"
      onClick={onLogin}
    >
      Demo Login
    </button>
  );
};

export default DemoButton;
