import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactImageAppear from 'react-image-appear';




const renderCarousel = (item, index) => {

    return (
        <Carousel.Item  >
            <ReactImageAppear className="carousel-image"
                src={item.img} alt={item.alt}
                loader="https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"
                animation="blurInDown"
                animationDuration="700ms"
                showLoader={true}

            />

            <Carousel.Caption >
                <h3>{item.caption}</h3>
                <p>{item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )

}

export default renderCarousel;
