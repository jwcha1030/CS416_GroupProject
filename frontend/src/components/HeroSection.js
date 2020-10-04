import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";

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
  buttonToExternalURL,

  //if buttonTo is null, then we are going to externalURL like google.com or google form.
  // if buttonTo is there /collections, then we go to /collections (ignoring buttonToExternalURL)
}) {
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
                <Link to={buttonTo}>
                  <Button
                    buttonSize="btn--wide"
                    lightBg
                    buttonColor={(lightBg = "msc_orange")}
                    onClick={(e) =>
                      buttonTo !== ""
                        ? buttonTo
                        : (window.location = buttonToExternalURL)
                    } //if buttonTo is not null, then go to buttonTo (Link) else, we are going to buttonToExternalURL on this button clicked.
                  >
                    {buttonLabel}
                  </Button>
                </Link>
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
        </div>
      </div>
    </>
  );
}

export default HeroSection;
