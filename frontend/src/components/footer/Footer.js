import React from "react";
import "./Footer.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../images/MSC.jpg";
import { FaLanguage, FaUserLock, FaHome } from "react-icons/fa";
import InquiryModal from "../inquiry/GeneralInquiry";
import { Modal } from "react-bootstrap";
import GoogleTranslate from "../translate/GoogleTranslate";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

const axios = require("axios");
const apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/email/subscribe/";

function Footer() {
  const [inquiryModalShow, setInquiryModalShow] = React.useState(false);
  const [subEmail, setSubEmail] = React.useState("");
  return (
    <div className="footer-container">
      <br />

      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership and receive the latest news & arrivals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div>
          <Formik
            onSubmit={async () => {
              let payload = {
                email: subEmail,
              };

              await new Promise((resolve) => setTimeout(resolve, 500));
              console.log(JSON.stringify(payload, null, 2));
              // alert(
              //   "There is a small error with the MSC's system. Please try again or contact us directly."
              // );
              axios
                .post(apiBaseUrl, payload)
                .then((response) => {
                  // Check if internet connection was working
                  if (response.status === 200) {
                    if (response.data.res_code === 1) {
                      // Everything worked correctly
                      // Do something with the returned data
                      console.log("Post SUCCESS", response.data.res_msg);
                      alert(
                        "Thanks! You've been successfully Subscribed to MSC. We will keep you updated!"
                      );
                      window.location.reload();

                      // } else if (){
                      // Check other res_code with else if
                      // }
                    } else {
                      // Unhandled res_code
                      console.log("Post: Unhandled res_code");
                    }
                  } else {
                    // TODO handle unable to connect with database
                    console.log("Post: unable to connect with database");
                  }
                })
                .catch(function (error) {
                  // TODO handle error with the call
                  console.log("Post: Call error");
                  console.log(error);
                });
            }}
            initialValues={{}}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                {subEmail === "" ? ( //button for 360 degree view if it is available.
                  <div></div>
                ) : (
                    <p id="thank-you-text">
                      Thank you <span id="subscribe-email-text">{subEmail}</span>.
                    We will keep you updated.
                    </p>
                    //else a text
                  )}
                <input
                  className="footer-input"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={(e) => {
                    setSubEmail(e.target.value);
                  }}
                />

                <Button type="submit" buttonStyle="btn--outline">
                  Subscribe
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      <br></br>
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
              href="https://www.youtube.com/watch?v=xLTye_XoBUU&feature=youtu.be&ab_channel=MACKENZIEBECXS"
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
                onClick={() => setInquiryModalShow(true)}
              >
                Make an Inquiry
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div align="center">
          <smaller style={{ color: "white" }}>
            Retail Revolution Store <br />
            SUNY Korea Academic Building C608 <br /> 119-2 Songdo Munhwa-ro,
            Yeonsu-gu <br />
            Incheon South Korea 21985
          </smaller>
          <br></br>
          <br></br>
          <br />

          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <GoogleTranslate className="GoogleTranslate" />
            </div>
            <div className="col-sm-3">
              <Link
                // ADMIN PAGE
                to="/adminlogin"
                className="admin-button"
              >
                <div style={{ fontSize: "12px" }}>
                  <FaUserLock
                    className="admin-icon"
                    style={{ paddingRight: "6px", fontSize: "2rem" }}
                  />
                  Admin Log in
                </div>
                <br />
              </Link>
              <div className="col-sm-3"></div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <InquiryModal
        show={inquiryModalShow}
        onHide={() => setInquiryModalShow(false)}
      />
    </div>
  );
}

export default Footer;
