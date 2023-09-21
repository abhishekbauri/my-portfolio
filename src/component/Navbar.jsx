import { useState } from "react";
import { navLinks, portfolioLogo } from "../constant/constant";
import {Link} from 'react-scroll'

import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="Nav">
      <nav className="navbar">
        <img src={portfolioLogo} className="logo" />
       
        <ul className={` navMenu  ${isActive ? "active" : ""}`}>
          {navLinks.map((item) => {
            return (
              <li key={item.label} onClick={removeActive}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="navLink"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          
        </ul>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
