import React, { Component,useState, useEffect  } from 'react';
import "./VR.css";

import { Pannellum, PannellumVideo } from "pannellum-react";
import myImage from "../images/vr_sample2.jpg";
import myImage2 from "../images/vr_sample3.jpg";
import myImage3 from "../images/vr_sample.jpg";

// import myVideo from "./images/video.mp4";
 

function VR () {
  const [currentVR, setNewVR] = useState(myImage);

  const handleClickHotSpot =(evt,newImage)=>{
    if(newImage != currentVR){
      setNewVR(newImage)
    }else{
      alert("No more next page")
    }

  }
return(
<div className="vr-container">
      <Pannellum className="vr-screen" 
        width="70%"
        height="600px"
        resize

        image={currentVR}
        pitch={10}
        yaw={400}
        hfov={100}
        autoLoad
        author=""
        title=""
        orientationOnByDefault={false}
        draggable
        keyboardZoom
        mouseZoom
        preview=""      
        previewAuthor=""
        previewTitle="Retail Revolution Shop"
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={()=>{console.log("panorama loaded");}}
        onScenechange={(id)=>{console.log("Scene has change on " + id);}}
        onScenechangefadedone={()=>{console.log("panorama loaded");}}
        onError={(err)=>{console.log("Error" , err);}}
        onErrorcleared={()=>{console.log("Error Cleared");}}
        onMousedown={(evt)=>{console.log("Mouse Down" , evt);}}
        onMouseup={(evt)=>{console.log("Mouse Up", evt);}}
        onTouchstart={(evt)=>{console.log("Touch Start", evt);}}
        onTouchend={(evt)=>{console.log("Touch End", evt);}}
        hotspotDebug={false}
    >
        <Pannellum.Hotspot 
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="/collections"
        />

        {/* <Pannellum.Hotspot 
        type="custom"
        name= {myImage}
        pitch={131}
        yaw={10}

        handleClick={(evt , args) => handleClickHotSpot(evt , args.name)}
        handleClickArg={{ "name":myImage }}
        /> */}


        <Pannellum.Hotspot 
        type="custom"
        name= {myImage}
        pitch={31}
        yaw={150}

        handleClick={(evt , args) => handleClickHotSpot(evt , args.name)}
        handleClickArg={{ "name":myImage2 }}
        />

    </Pannellum>
 
    {/******  for video 360 component *******/}
 
    {/* <PannellumVideo
      video={myVideo}
      loop
      width="100%"
      height="600px"
      pitch={10}
      yaw={180}
      hfov={140}
      minHfov={50}
      maxHfov={180}
    >
      <Pannellum.Hotspot
        type="custom"
        pitch={31}
        yaw={150}
        handleClick={(evt , name) => this.hanldeClick(name)}
        name="hs1"
      />
 
      <Pannellum.Hotspot
        type="info"
        pitch={31}
        yaw={-57}
        text="Info"
        URL="https://github.com/farminf"
      />
    </PannellumVideo> */}
 
    </div>);
}
 
export default VR;