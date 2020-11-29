import React from "react";
import "../hero_section/HeroSection.css";
import "./CollectionsMain.css";
import TabComponent from "./InfoTab";
import CollectionsCarousel from "./CollectionsProductCarousel";


// This is the "big" main component at the collections page.
// It consists of collections carousel, collections information, school information (tab).
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
                <div
                  className="home__hero-text-wrapper"
                  style={{ paddingLeft: "3rem" }}
                >
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
              <div className="row" id="tab-component">
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
