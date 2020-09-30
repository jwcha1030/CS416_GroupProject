import React from "react";
import HeroSection from "../../HeroSection";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion"
import Rotation from 'react-rotation'
import "../../RotatingImage.css";

import renderImages from "../../RotatingImage";
import { mugcup_1, mugcup_2 } from "./DataRotatingImages"

function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >

      <HeroSection {...products} />
      <div className="sample-wrapper">
        <Rotation autoPlay={true} cycle={true} scroll={true} className="mugcups">
          {mugcup_1.map(renderImages)}
        </Rotation>
        <Rotation autoPlay={true} cycle={true} scroll={true} className="mugcups">
          {mugcup_2.map(renderImages)}
        </Rotation>
      </div>
    </motion.div>



  );
}

export default Products;
