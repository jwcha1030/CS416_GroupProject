import React from "react";
import Rotation from 'react-rotation'
import "./RotatingImage.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import RotateSign from "../images/360_degrees.png"


const renderImages = (item, index) => {

    return (
        <div>
            <Loader
                type="TailSpin"
                color="#ea7229"
                secondaryColor="Grey"
                height={50}
                width={50}
                timeout={1000 + Math.random() * (5000)} //3 secs

            />
            <br></br>
            <img className="rotate_sign" src={RotateSign}></img>
            <br></br>

            <img className="rotating_image" src={item.img} />
        </div>
    )

}

export default renderImages;
