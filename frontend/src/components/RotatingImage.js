import React from "react";
import Rotation from 'react-rotation'
import "./RotatingImage.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import RotateSign from "../images/360_degrees.png"


const renderImages = (item, index) => {

    return (
        <div>

            <br></br>
            <div className="roating-image-wrapper">
                <div className="rotate-sign-wrapper">
                    <img className="rotate-sign" src={RotateSign}></img>

                    <Loader className="rotate-image-loader"
                        type="TailSpin"
                        color="#ea7229"
                        secondaryColor="Grey"
                        height={50}
                        width={50}
                        timeout={1000 + Math.random() * (1000)} //1-2 secs loading animation

                    />

                </div>
                <br></br>
                <img className="rotating-image" src={item.img} />
            </div>
        </div>
    )

}

export default renderImages;
