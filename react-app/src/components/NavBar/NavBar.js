import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import logo from "./MartialSheetLogo.png";

const NavBar = ({ setAuthenticated, auethenticated }) => {
  return (
    <nav className="md:flex px-4 flex-row justify-between items-center bg-red-dark border-2 border-gray-800">
      <div className="navLeft logo w-36 p-4">
        <NavLink to="/">
          <img className="bg-white rounded-lg" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div className="navRight">
        <NavLink
          className="flex-row p-2 m-2 rounded-lg border-2 border-gray-800"
          to="/"
          exact={true}
          activeClassName="active"
        >
          Home
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg border-2 border-gray-800"
          to="/login"
          exact={true}
          activeClassName="active"
        >
          Login
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg"
          to="/sign-up"
          exact={true}
          activeClassName="active"
        >
          Sign Up
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg hover:border-gray-500 hover:border-2"
          to="/users"
          exact={true}
          activeClassName="active"
        >
          Users
        </NavLink>

        <LogoutButton
          className="m-2 bg-white rounded-lg border-2 border-purple-500 hover:border-gray-500"
          setAuthenticated={setAuthenticated}
        />
      </div>
    </nav>
  );
};

export default NavBar;
