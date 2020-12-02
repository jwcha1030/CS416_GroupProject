import React from "react";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";

import C_IMG_0 from "../../images/model_orange.jpg";
import C_IMG_1 from "../../images/model_hat.jpg";
import C_IMG_2 from "../../images/collections_carousel/c1.jpg";
import C_IMG_3 from "../../images/collections_carousel/c2.jpg";
import C_IMG_4 from "../../images/collections_carousel/c3.jpg";
import C_IMG_5 from "../../images/collections_carousel/c4.jpg";
import C_IMG_6 from "../../images/collections_carousel/c5.jpg";
import C_IMG_7 from "../../images/collections_carousel/c6.jpg";
import C_IMG_8 from "../../images/aboutus.jpg";
import C_IMG_9 from "../../images/model_white.jpg";
import C_IMG_10 from "../../images/member.jpg";

import s from "./CollectionsProductCarousel.scss";

const NUM_CAROUSEL = 11;

//NOTE THIS CAROUSEL IS NOT MANAGED BY THE ADMINS OR THE BACKEND.
// MAY BE MOVED TO BACKEND IN THE FUTURE.

// randomly generated 0-10 unique numbers for randomizing the carousel images order.
// NOTE: THIS could not be done with loops because of FILE name cannot be dynamically changed.

var randomSlideNumber = [];

while (randomSlideNumber.length < NUM_CAROUSEL) {
  var r = Math.floor(Math.random() * NUM_CAROUSEL);
  if (randomSlideNumber.indexOf(r) === -1) randomSlideNumber.push(r);
}
var randomOrderImages = [];
randomOrderImages[randomSlideNumber[0]] = C_IMG_0;
randomOrderImages[randomSlideNumber[1]] = C_IMG_1;
randomOrderImages[randomSlideNumber[2]] = C_IMG_2;
randomOrderImages[randomSlideNumber[3]] = C_IMG_3;
randomOrderImages[randomSlideNumber[4]] = C_IMG_4;
randomOrderImages[randomSlideNumber[5]] = C_IMG_5;
randomOrderImages[randomSlideNumber[6]] = C_IMG_6;
randomOrderImages[randomSlideNumber[7]] = C_IMG_7;
randomOrderImages[randomSlideNumber[8]] = C_IMG_8;
randomOrderImages[randomSlideNumber[9]] = C_IMG_9;
randomOrderImages[randomSlideNumber[10]] = C_IMG_10;

export default () => (
  <CarouselProvider
    visibleSlides={2}
    totalSlides={NUM_CAROUSEL}
    step={2}
    naturalSlideWidth={800}
    naturalSlideHeight={1000}
    hasMasterSpinner
    isPlaying={true}
  >
    <Slider className={s.slider}>
      <Slide index={randomSlideNumber[0]}>
        <ImageWithZoom src={randomOrderImages[0]} />
      </Slide>
      <Slide index={randomSlideNumber[1]}>
        <ImageWithZoom src={randomOrderImages[1]} />
      </Slide>
      <Slide index={randomSlideNumber[2]}>
        <ImageWithZoom src={randomOrderImages[2]} />
      </Slide>
      <Slide index={randomSlideNumber[3]}>
        <ImageWithZoom src={randomOrderImages[3]} />
      </Slide>
      <Slide index={randomSlideNumber[4]}>
        <ImageWithZoom src={randomOrderImages[4]} />
      </Slide>
      <Slide index={randomSlideNumber[5]}>
        <ImageWithZoom src={randomOrderImages[5]} />
      </Slide>
      <Slide index={randomSlideNumber[6]}>
        <ImageWithZoom src={randomOrderImages[6]} />
      </Slide>
      <Slide index={randomSlideNumber[7]}>
        <ImageWithZoom src={randomOrderImages[7]} />
      </Slide>
      <Slide index={randomSlideNumber[8]}>
        <ImageWithZoom src={randomOrderImages[8]} />
      </Slide>
      <Slide index={randomSlideNumber[9]}>
        <ImageWithZoom src={randomOrderImages[9]} />
      </Slide>
      <Slide index={randomSlideNumber[10]}>
        <ImageWithZoom src={randomOrderImages[10]} />
      </Slide>
    </Slider>
    <br />
    <div align="center">
      <div>
        <ButtonBack className="CarouselButton">Back</ButtonBack>
        {"     "}
        <ButtonNext className="CarouselButton">Next</ButtonNext>
      </div>
    </div>
  </CarouselProvider>
);
