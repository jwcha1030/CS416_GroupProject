import React from "react";
import Rotation from 'react-rotation'
import "./RotatingImage.css";



const renderImages = (item, index) => {

    return (
        <img className="rotating_images" src={item.img} />
    )

}

export default renderImages;
