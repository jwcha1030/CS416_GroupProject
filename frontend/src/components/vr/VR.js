import React, { Component, useState, useEffect } from "react";
import "./VR.css";

import { Pannellum, PannellumVideo } from "pannellum-react";
import VR_LOCATION_1 from "../../images/vr1.png";
import VR_LOCATION_2 from "../../images/vr2.png";
import VR_LOCATION_3 from "../../images/vr1.png";

// import videoVR from "./images/video.mp4"; // video can be also imported with  this library

function VR() {
  const [currentVR, setNewVR] = useState(VR_LOCATION_1);

  const handleClickHotSpot = (evt, newImage) => {
    if (newImage != currentVR) {
      setNewVR(newImage);
    } else {
      alert("No more next page.");
    }
  };
  return (
    <div className="vr-container">
      <Pannellum
        className="vr-screen"
        width="100%"
        height="700px"
        resize
        image={currentVR}
        pitch={10}
        yaw={400}
        hfov={100}
        autoLoad
        orientationOnByDefault={false}
        draggable
        keyboardZoom
        mouseZoom
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={() => {
          console.log("panorama loaded");
        }}
        hotspotDebug={false}
      >
        {/* info hotspot, can be clicked to be linked to the product. This is not setup dynamically, yet. */}
        <Pannellum.Hotspot
          type="info"
          pitch={-2}
          yaw={-105}
          text="Apparels"
          URL="/collections"
        />
        <Pannellum.Hotspot
          type="info"
          pitch={-1}
          yaw={-57}
          text="Apparels"
          URL="/collections"
        />

        {/* teleport */}
        {/* <Pannellum.Hotspot
          type="custom"
          name={VR_LOCATION_1}
          pitch={0}
          yaw={0}
          handleClick={(evt, args) => handleClickHotSpot(evt, args.name)}
          handleClickArg={{ name: VR_LOCATION_2 }}
        /> */}
        {/* <Pannellum.Hotspot
          type="custom"
          name={VR_LOCATION_3}
          pitch={31}
          yaw={150}
          handleClick={(evt, args) => handleClickHotSpot(evt, args.name)}
          handleClickArg={{ name: VR_LOCATION_3 }}
        />
   */}
      </Pannellum>
    </div>
  );
}

export default VR;
