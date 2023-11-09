import { NavLink, Link } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";
import logoImg from "../media/images/logo.png";

const Header = ({ theme, handleTheme }) => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/" id="title">
            <img id="logo" src={logoImg} alt="Website logo" />
            <h1>Intro to Multimedia</h1>
          </Link>
          <nav>
            <NavLink to="/" className="link clickable">
              Home
            </NavLink>
            <NavLink to="/video" className="link clickable">
              Video
            </NavLink>
            <NavLink to="/hobbies" className="link clickable">
              Hobbies
            </NavLink>
            <NavLink to="/coursework" className="link clickable">
              Coursework
            </NavLink>
            <NavLink to="/clock" className="link clickable">
              Clock
            </NavLink>
            <ThemeSwitch theme={theme} handleTheme={handleTheme} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
