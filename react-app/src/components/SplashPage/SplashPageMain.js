import { useState } from "react";
import LoggedOutSplash from "./LoggedOutSplash";
import LoggedInSplash from "./LoggedInSplash";

const SplashPageMain = ({ authenticated }) => {
  return (
    <div className="pageContent">
      {authenticated ? (
        <LoggedInSplash></LoggedInSplash>
      ) : (
        <LoggedOutSplash></LoggedOutSplash>
      )}
    </div>
  );
};

export default SplashPageMain;
