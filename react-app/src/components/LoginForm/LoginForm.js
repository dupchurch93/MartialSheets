import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(sessionActions.login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const onDemoLogin = async (e) => {
    await dispatch(sessionActions.login("demo@aa.io", "password"));
    setAuthenticated(true);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginContaier flex flex-col items-center m-8 p-8 w-2/3">
      <div className="text-xl font-bold">Login</div>
      <form onSubmit={onLogin} className="border rounded-md border-black text-center w-96">
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className="text-center border border-gray-800 rounded-sm mb-6 mt-6"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className="text-center border border-gray-800 rounded-sm"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="p-2 m-4 rounded-lg border-2 border-gray-800 hover:border-gray-500">
            Login
          </button>
        </div>
      </form>
      <button onClick={onDemoLogin} className="p-2 m-2 rounded-lg border-2 border-gray-800">Demo Login</button>
    </div>
  );
};

export default LoginForm;
