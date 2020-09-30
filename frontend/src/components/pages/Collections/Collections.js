import React from "react";
import HeroSection from "../../HeroSection";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion"
import Rotation from 'react-rotation'
import "../../RotatingImage.css";

import renderImages from "../../RotatingImage";
import { mugcup_1, mugcup_2, sample } from "./DataRotatingImages"

function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <HeroSection {...products} />
      <div className="sample-wrapper">

        <Rotation autoPlay={false} cycle={true} scroll={false} className="rotating-image">
          {mugcup_1.map(renderImages)}
        </Rotation>
        <Rotation autoPlay={false} cycle={true} scroll={false} className="rotating-image">
          {mugcup_2.map(renderImages)}
        </Rotation>

        <Rotation autoPlay={false} cycle={true} scroll={false} className="rotating-image">
          {sample.map(renderImages)}
        </Rotation>
      </div>
    </motion.div>



  );
}

export default Collection;
