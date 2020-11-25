import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselItem.css";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselItem = (item, index) => {
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

// eg.
//<Carousel>----------------------------------------Carousel
//<Carousel.Item>-----------------------1st item
// <img  src={img1} alt={alt} />
// <Carousel.Caption>
//   <h3>{caption1}</h3>
//   <p>{desc1}</p>
// </Carousel.Caption>
// </Carousel.Item>
//
//<Carousel.Item>-----------------------2nd item
// <img  src={img2} alt={alt} />
// <Carousel.Caption>
//   <h3>{caption2}</h3>
//   <p>{desc2}</p>
// </Carousel.Caption>
// </Carousel.Item>
// ...
// </Carousel>---------------------------------------Carousel
export default carouselItem;
