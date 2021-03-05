import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(
        sessionActions.signUp(username, email, password)
      );
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signUpContainer flex flex-col items-center m-8 p-8 w-2/3">
      <div className="text-xl font-bold">Sign Up</div>
      <form onSubmit={onSignUp} className="border rounded-md border-black text-center w-96">
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={updateUsername}
            value={username}
            className="text-center border border-gray-800 rounded-sm mb-6 mt-6 py-1"
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="text-center border border-gray-800 rounded-sm mb-6 py-1"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-center border border-gray-800 rounded-sm mb-6 py-1"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="repeat_password"
            placeholder="Repeat Password"
            className="text-center border border-gray-800 rounded-sm mb-6 py-1"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="flex justify-center mb-6">
          <button type="submit" className="p-2 m-2 rounded-lg border-2 border-gray-800 hover:border-2 hover:border-gray-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
