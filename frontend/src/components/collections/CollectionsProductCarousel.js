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

import c0 from "../../images/model_orange.jpg";
import c1 from "../../images/model_hat.jpg";
import c2 from "../../images/collections_carousel/c1.jpg";
import c3 from "../../images/collections_carousel/c2.jpg";
import c4 from "../../images/collections_carousel/c3.jpg";
import c5 from "../../images/collections_carousel/c4.jpg";
import c6 from "../../images/collections_carousel/c5.jpg";
import c7 from "../../images/collections_carousel/c6.jpg";
import c8 from "../../images/aboutus.jpg";
import c9 from "../../images/model_white.jpg";
import c10 from "../../images/member.jpg";

import s from "./CollectionsProductCarousel.scss";

const NUM_CAROUSEL = 11;

// randomly generated 0-10 unique numbers for randomizing the carousel images order.
// NOTE: THIS could not be done with loops because of FILE name cannot be dynamically changed.

var randomSlideNumber = [];
while (randomSlideNumber.length < NUM_CAROUSEL) {
  var r = Math.floor(Math.random() * NUM_CAROUSEL);
  if (randomSlideNumber.indexOf(r) === -1) randomSlideNumber.push(r);
}
var randomOrderImages = [];
randomOrderImages[randomSlideNumber[0]] = c0;
randomOrderImages[randomSlideNumber[1]] = c1;
randomOrderImages[randomSlideNumber[2]] = c2;
randomOrderImages[randomSlideNumber[3]] = c3;
randomOrderImages[randomSlideNumber[4]] = c4;
randomOrderImages[randomSlideNumber[5]] = c5;
randomOrderImages[randomSlideNumber[6]] = c6;
randomOrderImages[randomSlideNumber[7]] = c7;
randomOrderImages[randomSlideNumber[8]] = c8;
randomOrderImages[randomSlideNumber[9]] = c9;
randomOrderImages[randomSlideNumber[10]] = c10;

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
