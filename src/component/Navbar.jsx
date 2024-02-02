import { useState } from "react";
import { navLinks, portfolioLogo } from "../constant/constant";
import { NavLink } from "react-router-dom";

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

        <ul className={` navMenu  `}>
          {navLinks.map((item) => {
            return (
              <li key={item.label} onClick={removeActive}>
                <NavLink to={item.href} className="nav-link">
                  {item.label}
                </NavLink>
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
