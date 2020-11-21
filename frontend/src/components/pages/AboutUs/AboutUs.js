import React from "react";
import HeroSection from "../../hero_section/HeroSection";
import { aboutUs, virtualStore } from "./Data";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../footer/Footer";
import VR from "../../vr/VR";

//const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

function AboutUs() {
  // const myRef = useRef(null)
  // const executeScroll = () => scrollToRef(myRef)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection id="aboutUs" {...aboutUs}></HeroSection>
      <HeroSection id="VR" {...virtualStore} />
      <VR></VR>

      <Footer />
    </motion.div>
  );
}

export default AboutUs;
