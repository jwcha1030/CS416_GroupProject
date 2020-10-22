import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../../images/MSC.jpg";
import { FaLanguage, FaUserLock, FaHome } from "react-icons/fa";
import InquiryModal from "../../Inquiry";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
 

function Footer() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership and receive the latest news & arrivals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* <div className="footer-links">for later</div> */}
      <section className="social-media">
         
        <div className="social-media-wrap">
        
           <Link to="/" className="social-logo-icon">
            <img src={Logo}></img>
          </Link>
        
        <small className="website-rights">
            Merchandising Society Club © 2020
          </small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/mscsunykr/?ref=bookmarks"
              className="social-icon-link"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/msc_sunykr/"
              className="social-icon-link"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              className="social-icon-link"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <div className="footer-inquiry">
              <Button
                className="make-inquiry"
                buttonStyle="btn--outline"
                onClick={() => setModalShow(true)}
              >
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div align="center">
          <smaller style={{ color: "white" }}>032-1234-1234</smaller>
          <br></br>
          <smaller style={{ color: "white" }}>msc.sunykr@gmail.com</smaller>

          <br></br>

          <smaller style={{ color: "white" }}>
            SUNY Korea, 119 Songdo Moonhwa-Ro Incheon, Korea (21985)
          </smaller>
          <br></br>
          <br></br>
          <Link
              // ADMIN PAGE
              to="/adminlogin"
              className="admin-button"
          >
              <FaUserLock
                style={{ fill: "white", paddingRight: "6px" }}
              />
              <div style={{ fontSize: "12px" }}>Admin Log in</div>
           </Link>  
        </div>
       
      </section>

      <InquiryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Footer;
