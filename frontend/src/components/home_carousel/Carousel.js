import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const renderCarousel = (item, index) => {
  return (
    <Carousel.Item>
      <img className="carousel-image" src={item.img} alt={item.alt} />

      <Carousel.Caption>
        <h3>{item.caption}</h3>
        <p>{item.desc}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default renderCarousel;
