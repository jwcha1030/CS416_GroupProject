import React from "react";
import "./HeroSection.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import InquiryModal from "../inquiry/GeneralInquiry";
import Modal from "react-bootstrap/Modal";
import ButtonBootstrap from "react-bootstrap/Button";
import VR from "../vr/VR";
import { Card } from "antd";
import { WindowsFilled } from "@ant-design/icons";
const { Meta } = Card;

// THIS IS THE BASE COMPONENT OF MOST OF THE WEBSITE. SOME ARE RENDERED WITH === ? : HERE FOR CONVENIENCE.
// THIS BASICALLY MEANS THAT CODE SUCH AS , IF (ABOUT US)  --> DO SOMETHING. IS IN THIS FILE.
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  buttonLabel,
  buttonTo,
  aboutUsRender,
  aboutUsRenderSubButton,
}) {
  const [inquiryModalShow, setInquiryModalShow] = React.useState(false);
  const [VRModalShow, setVRModalShow] = React.useState(false);
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section white" : "home__hero-section black"
        }
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading " : "heading textBlack"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle textWhite"
                      : "home__hero-subtitle textBlack"
                  }
                >
                  {description}
                </p>
                {/* Check if buttonTo is External URL or not and uses a href or Link, respectively  */}
                {/^https?:\/\//.test(buttonTo) ? (
                  <a href={buttonTo}>
                    <Button
                      buttonSize="btn--wide"
                      lightBg
                      buttonColor={(lightBg = "msc_orange")}
                    >
                      {buttonLabel}
                    </Button>
                  </a>
                ) : (
                  <Link to={buttonTo}>
                    <Button
                      buttonSize="btn--wide"
                      lightBg
                      buttonColor={
                        buttonLabel === "Our Team" ||
                        buttonLabel === "Collections"
                          ? "black"
                          : "msc_orange"
                      }
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
                )}{" "}
                {/* dynamic render of AboutUs "Contact Button for scroll down using a href #"  */}
                {
                  aboutUsRender === "TRUE_CONTACT" ? (
                    <Button
                      buttonSize="btn--wide"
                      lightBg
                      buttonColor="black"
                      onClick={() => {
                        setInquiryModalShow(true);
                      }}
                    >
                      {aboutUsRenderSubButton}
                    </Button>
                  ) : (
                    " "
                  ) //else nothing
                }
                {
                  aboutUsRender === "TRUE_VR" ? (
                    <Button
                      buttonSize="btn--wide"
                      lightBg
                      buttonColor="black"
                      onClick={() => {
                        setVRModalShow(true);
                      }}
                    >
                      {aboutUsRenderSubButton}
                    </Button>
                  ) : (
                    <div></div>
                  ) //else nothing
                }
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                {/*  API: https://github.com/ArunMichaelDsouza/react-image-appear */}
                <ReactImageAppear
                  className="home__hero-img"
                  src={img}
                  alt={alt}
                  animation="fillIn"
                  animationDuration="3s"
                />
              </div>
            </div>
          </div>
          <VRModal
            show={VRModalShow}
            onHide={() => setVRModalShow(false)}
          ></VRModal>

          <InquiryModal
            show={inquiryModalShow}
            onHide={() => setInquiryModalShow(false)}
          />
        </div>
      </div>
    </>
  );
}

function VRModal(props) {
  return (
    <Modal
      className="vr-modal-content"
      {...props}
      size="lg"
      dialogClassName="vr-modal"
      centered
      style={{ opacity: 1 }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="vr-title">
          Virtual Reality of Retail Revolution Shop
        </Modal.Title>
      </Modal.Header>
      <Modal.Body align="center">
        <Card cover={<VR></VR>}></Card>
      </Modal.Body>
    </Modal>
  );
}
export default HeroSection;
