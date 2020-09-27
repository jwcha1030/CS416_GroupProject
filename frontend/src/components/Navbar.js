import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

   const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ size: "2.5rem", color: "#ea7229" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Merchandising Society Club
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>


            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/collections"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ourteam"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  //  KOREAN PAGE
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  KOR
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // ENGLISH PAGE
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ENG
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  // ADMIN PAGE
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              </li>
            </ul>


 



          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
