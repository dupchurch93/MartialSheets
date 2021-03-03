import gitHubIcon from "./GitHub_Logo.png";
import linkedInIcon from "./LI-Logo.png";
import dan from "./Dan_profile_footer_img.svg";
import reactLogo from "./react_logo_white.svg";
import pythonLogo from "./python-logo-white.svg";
import flaskLogo from "./flask_logo_img.svg";

const Footer = () => {
  return (
    <div className="Footer flex justify-between bg-gray-900">
      <div className="profile_container flex items-center">
        <img className="profilePic" src={dan} alt="Profile" />
        <div>
          <div className="text-white font-bold">Created By:</div>
          <div className="text-white font-bold">Daniel Upchurch</div>
        </div>
        <a href="https://github.com/dupchurch93">
          <img
            src={gitHubIcon}
            className="bg-white rounded-2xl mx-4 w-40 h-16"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-upchurch-058899205/"
          className="bg-white rounded-2xl mx-4 w-40 h-16 p-4"
        >
          <img src={linkedInIcon} alt="linkedin"/>
        </a>
      </div>
      <div className="madeWithContainer text-white flex items-center font-bold">
        <div className="text-white">Made With:</div>
        <img src={flaskLogo} alt="flask logo"></img>
        <img src={pythonLogo} alt="python logo"></img>
        <img src={reactLogo} alt="react logo"></img>
      </div>
    </div>
  );
};

export default Footer;
