import React from "react";
import Rotation from "react-rotation";
import "./RotatingImage.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import ROTATE_SIGN_IMG from "../../images/view_in_360.png";
import ROTATE_SIGN_2_IMG from "../../images/rotate.png";

// 360 degree view of a collection item
// BACKEND refers it has catalogDisplay*

const renderImages = (item, index) => {
  return (
    <div>
      <br></br>
      <div className="roating-image-wrapper">
        <div className="rotate-sign-wrapper">
          <img className="rotate-sign" src={ROTATE_SIGN_IMG}></img>
          <img className="rotate-sign-2" src={ROTATE_SIGN_2_IMG}></img>
          <Loader
            //   API https://www.npmjs.com/package/react-loader-spinner
            className="rotate-image-loader"
            type="Oval"
            color="#ea7229"
            secondaryColor="Grey"
            height={20}
            width={20}
            timeout={2500} //2.5s loading animation for UI
          />
        </div>
        <br></br>

        <img className="rotating-image" src={item.img} />
      </div>
    </div>
  );
};

export default renderImages;
