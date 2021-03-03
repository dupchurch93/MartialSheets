import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import logo from "./MartialSheetLogo.png";

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <nav className="flex px-4 flex-row justify-between items-center border-t-2 border-b-2 border-gray-800 bg-gradient-to-r from-red-600 to-red-100">
      <div className="navLeft logo w-36 p-4">
        <NavLink to="/">
          <img className="rounded-lg" src={logo} alt="Logo"></img>
        </NavLink>
      </div>
      <div className="navRight">
        {authenticated ? (
          <>
            <NavLink
              className="flex-row p-2 m-2 rounded-lg border-2 border-gray-800 font-bold"
              to="/"
              exact={true}
            >
              Home
            </NavLink>
            <LogoutButton className="" setAuthenticated={setAuthenticated} />
          </>
        ) : (
          <>
            <NavLink
              className="m-2 p-2 rounded-lg border-2 border-gray-800 font-bold"
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
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
