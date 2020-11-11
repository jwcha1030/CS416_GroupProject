import React from "react";
import CollectionsMain from "../../collections/CollectionsMain";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

import "pure-react-carousel/dist/react-carousel.es.css";
import ProductList from "../../collections/ProductList";
import renderImages from "../../collections/RotatingImage";
import Rotation from "react-rotation";
import "../../collections/RotatingImage.css";
import { mugcup_1, mugcup_2, sample } from "./DataRotatingImages";
import Footer from "../../footer/Footer";
import ScrollToTop from "react-router-scroll-top";

function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CollectionsMain {...products} />
      <ProductList />
      <Footer />
    </motion.div>
  );
}

export default Collection;
