import React from "react";
import HeroSection from "../../HeroSection";
import { products } from "./Data";
import { AnimatePresence, motion } from "framer-motion"

function Products() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} >
      
      <HeroSection {...products} />
    </motion.div>
  );
}

export default Products;
