import React from "react";
import HeroSection from "../../HeroSection";
import { aboutUs, virtualStore } from "./Data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../Footer.js/Footer";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection {...aboutUs}></HeroSection>
      <HeroSection {...virtualStore} />
      <Footer />
    </motion.div>
  );
}

export default AboutUs;
