import React from "react";
import CollectionsMain from "../../CollectionsMain";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion";
import Rotation from "react-rotation";
import "../../RotatingImage.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import renderImages from "../../RotatingImage";
import { mugcup_1, mugcup_2, sample } from "./DataRotatingImages";
import CollectionsCarousel from "../../CollectionsCarousel";

function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CollectionsMain {...products} />
      <CollectionsCarousel></CollectionsCarousel>
      <div className="sample-wrapper">
        <Rotation
          autoPlay={false}
          cycle={true}
          scroll={false}
          className="rotating-image"
        >
          {mugcup_1.map(renderImages)}
        </Rotation>
        <Rotation
          autoPlay={false}
          cycle={true}
          scroll={false}
          className="rotating-image"
        >
          {mugcup_2.map(renderImages)}
        </Rotation>

        <Rotation
          autoPlay={false}
          cycle={true}
          scroll={false}
          className="rotating-image"
        >
          {sample.map(renderImages)}
        </Rotation>
      </div>
    </motion.div>
  );
}

export default Collection;
