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
import a1 from "../images/model_orange.jpg";
import a2 from "../images/model_hat.jpg";
import a3 from "../images/aboutus.jpg";
import a4 from "../images/model_white.jpg";
import a5 from "../images/member.jpg";
import a6 from "../images/dummy.jpg";

import s from "./CollectionsCarousel.scss";

export default () => (
  <CarouselProvider
    visibleSlides={3}
    totalSlides={6}
    step={3}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
  >
    <h2 className={s.headline}>Carousel (With Master Loading Spinner)</h2>
    <p>
      This spinner will go away after all the images have loaded. You might want
      to use Chrome dev tools to throttle the network connection so you can see
      the spinner.
    </p>
    <Slider className={s.slider}>
      <Slide index={0}>
        <ImageWithZoom src={a1} />
      </Slide>
      <Slide index={1}>
        <ImageWithZoom src={a2} />
      </Slide>
      <Slide index={2}>
        <ImageWithZoom src={a3} />
      </Slide>
      <Slide index={3}>
        <ImageWithZoom src={a4} />
      </Slide>
      <Slide index={4}>
        <ImageWithZoom src={a5} />
      </Slide>
      <Slide index={5}>
        <ImageWithZoom src={a6} />
      </Slide>
    </Slider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup />
  </CarouselProvider>
);
