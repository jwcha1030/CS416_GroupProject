import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg
            ? "home__hero-section"
            : "home__hero-section msc_orange_background"
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
                <h1
                  className={
                    lightText ? "heading" : "heading msc_orange_invert"
                  }
                >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle msc_orange"
                      : "home__hero-subtitle msc_orange_invert"
                  }
                >
                  {description}
                </p>
                {/* <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="msc_orange">
                    {buttonLabel}
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="col">
              {/* <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
