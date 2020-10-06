import React from "react";
import CollectionsMain from "../../CollectionsMain";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

import "pure-react-carousel/dist/react-carousel.es.css";
import ProductList from "../../ProductList";
import renderImages from "../../RotatingImage";
import Rotation from "react-rotation";
import "../../RotatingImage.css";
import { mugcup_1, mugcup_2, sample } from "./DataRotatingImages";

function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CollectionsMain {...products} />

      <ProductList />
    </motion.div>
  );
}

export default Collection;
