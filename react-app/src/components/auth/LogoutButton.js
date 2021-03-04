import React from "react";
import logout from "../../store/session"
import { useDispatch } from "react-redux"

const LogoutButton = ({setAuthenticated}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setAuthenticated(false);
  };

  return <button className="m-2 p-2 rounded-lg border-2 border-gray-800 font-bold leading-tight" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
