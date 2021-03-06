import React from "react";
import CollectionsMain from "../../components/collections/CollectionsMain";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

import "pure-react-carousel/dist/react-carousel.es.css";
import ProductList from "../../components/collections/ProductList";
import renderImages from "../../components/collections/RotatingImage";
import Rotation from "react-rotation";
import "../../components/collections/RotatingImage.css";
import { mugcup_1, mugcup_2, sample } from "./DataRotatingImages";
import Footer from "../../components/footer/Footer";
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
