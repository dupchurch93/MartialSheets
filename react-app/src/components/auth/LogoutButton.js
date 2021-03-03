import React from "react";
import { logout } from "../../services/auth";

const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return <button className="m-2 p-2 rounded-lg border-2 border-gray-800 font-bold leading-tight" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
