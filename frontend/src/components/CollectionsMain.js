import React from "react";
import "./HeroSection.css";
import "./CollectionsMain.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import Tab from "@material-ui/core/Tab";
import TabComponent from "./TabComponent";
import CollectionsCarousel from "./CollectionsCarousel";

function CollectionsMain({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section white" : "home__hero-section black"
        }
      >
        <div className="container">
          <div className="row home__hero-row">
            <div className="col-sm-8">
              <CollectionsCarousel />
            </div>
            <div className="col-sm-1 " />

            <div className="col-sm-3 ">
              <div className="row">
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
                </div>
              </div>
              <div className="row">
                <TabComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollectionsMain;