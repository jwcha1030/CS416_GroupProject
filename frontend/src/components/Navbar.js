import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import SVG from "react-inlinesvg";
import Logo from "../images/MSC.jpg";
import { FaLanguage, FaUserLock, FaHome } from "react-icons/fa";
import GoogleTranslate from "./GoogleTranslate";

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
          <div className="navbar-container container-nav">
            {/* <SVG
  baseURL="/home"
  cacheRequests={true}
  description="The React logo"
  loader={<span>Loading...</span>}
  onError={error => console.log(error.message)}
  onLoad={(src, hasCache) => console.log(src, hasCache)}
  preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
  src="../../images/MSC.svg"
  title="React"
  uniqueHash="a1f8d1"
  uniquifyIDs={true}
/> */}
            {/*SVG not working properly :( so using jpg file)  */}

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <div className="navbar-icon">
                <img src={Logo} />
              </div>
              Merchandising Society
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <FaHome style={{ fill: "black", paddingRight: "7px" }} /> Home
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
              <div className={"non-function"}>
                {/* <li className="nav-item">
                  <Link
                    // Toggle translate
                    to="/"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <FaLanguage
                      style={{ fill: "black", paddingRight: "2px" }}
                    />
                    <div style={{ fontSize: "11px" }}>KOR | ENG</div>
                    
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    // ADMIN PAGE
                    to="/adminlogin"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <FaUserLock
                      style={{ fill: "black", paddingRight: "6px" }}
                    />
                    <div style={{ fontSize: "11px" }}>ADMIN</div>
                  </Link>
                </li>
                <li className="nav-item">

                <GoogleTranslate className="GoogleTranslate"/> 
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
