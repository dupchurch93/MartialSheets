import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import logo from "./MartialSheetLogo.png";

const NavBar = ({ setAuthenticated, auethenticated }) => {
  return (
    <nav className="md:flex px-4 flex-row justify-between items-center bg-red-900 border-2 border-gray-800">
      <div className="navLeft logo w-36 p-4">
        <NavLink to="/">
          <img className="bg-white rounded-lg" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div className="navRight">
        <NavLink
          className="flex-row p-2 m-2 rounded-lg border-2 border-blue-800 bg-black"
          to="/"
          exact={true}
        >
          Home
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg border-2 border-gray-800"
          to="/login"
          exact={true}
        >
          Login
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg border-2 border-gray-800 font-bold"
          to="/sign-up"
          exact={true}
        >
          Sign Up
        </NavLink>

        <NavLink
          className="m-2 p-2 rounded-lg border-2 border-gray-800"
          to="/users"
          exact={true}
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
