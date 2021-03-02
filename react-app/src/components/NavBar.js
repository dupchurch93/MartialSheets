import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="md:flex mx:auto flex-row p-2 m-2">
      <NavLink className="flex-row p-2 m-2" to="/" exact={true} activeClassName="active">
        Home
      </NavLink>
      <NavLink className="flex-row p-2 m-2" to="/login" exact={true} activeClassName="active">
        Login
      </NavLink>
      <NavLink className="flex-row p-2 m-2"to="/sign-up" exact={true} activeClassName="active">
        Sign Up
      </NavLink>
      <NavLink className="flex-row p-2 m-2" to="/users" exact={true} activeClassName="active">
        Users
      </NavLink>
      <LogoutButton className="flex-row p-2 m-2" setAuthenticated={setAuthenticated} />
    </nav>
  );
};

export default NavBar;
