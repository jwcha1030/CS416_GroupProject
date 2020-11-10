import React from "react";
import "./HeroSection.css";
import "./CollectionsMain.css";
import TabComponent from "./TabComponent";
import CollectionsCarousel from "./CollectionsCarousel";

function CollectionsMain({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
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

            <div className="col-sm-4 ">
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
              <div className="row" style={{ margin: "3rem" }}>
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
