import { NavLink, Link } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";
import logoImg from "../media/images/logo.png";

const Header = ({ theme, setTheme }) => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <h1>
              <img src={logoImg} alt="Website logo" height={"40px"} />
              My website
            </h1>
          </Link>
          <nav>
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/video" className="link">
              Video
            </NavLink>
            <NavLink to="/hobbies" className="link">
              Hobbies
            </NavLink>
            <NavLink to="/coursework" className="link">
              Coursework
            </NavLink>
            <NavLink to="/clock" className="link">
              Clock
            </NavLink>
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
