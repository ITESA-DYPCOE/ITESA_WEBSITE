import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import "../Navbar/Dropdown/Dropdown.css";

import Button from "../utils/Button/Button";

import logo from "../utils/Logo/DARK_MODE-LOGO.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbarColor, setNavbarColor] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeNavbarColor = () => {
    // console.log(window.screenY);
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav className={navbarColor ? "navbar active-color" : "navbar"}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="navbar-brand">
              <img
                style={{
                  borderRadius: "0.3em",
                  height: "2rem",
                  width: "7em",
                  position: "relative",
                  marginTop: "6px",
                }}
                src={logo}
                alt="ITSEA"
                onClick={scrollTop}
              />
            </div>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            onClick={scrollTop}
          >
            <li className="nav-item active">
              <NavLink
                activeClassName="active-links"
                to="/"
                className="nav-links "
                onClick={closeMobileMenu}
                exact={true}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <Link className="btn-links">
                <div className="dropdown">
                  <Button buttonStyle="btn--outline">
                    Team <i className="fas fa-caret-down" />
                    <div className="dropdown-content">
                      <NavLink
                        activeClassName="active-links"
                        to="/technical-team"
                        onClick={closeMobileMenu}
                      >
                        Technical
                      </NavLink>
                      <NavLink
                        activeClassName="active-links"
                        to="/management-team"
                        onClick={closeMobileMenu}
                      >
                        Management
                      </NavLink>
                      <NavLink
                        activeClassName="active-links"
                        to="/cultural-team"
                        onClick={closeMobileMenu}
                      >
                        Cultural
                      </NavLink>
                      <NavLink
                        activeClassName="active-links"
                        to="/past-teams"
                        onClick={closeMobileMenu}
                      >
                        Past Team
                      </NavLink>
                    </div>
                  </Button>
                </div>
              </Link>
            </li>
            <li className="nav-item active">
              <NavLink
                activeClassName="active-links"
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events <span className="badge badge-warning">new</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                activeClassName="active-links"
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
