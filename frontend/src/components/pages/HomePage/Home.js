import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../HeroSection";
import { collections, ourteam, aboutus } from "./Data"; 
import renderCarousel from "../../Carousel"
import { carouselData } from "./CarouselData"
import {motion } from "framer-motion"
import Carousel from "react-bootstrap/esm/Carousel";

function Home() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >

      {/* now carousel is updated in carouselData.js */}
      <Carousel>
        {carouselData.map(renderCarousel)}
      </Carousel>


      <HeroSection {...collections} />

      <HeroSection {...ourteam} />

      <HeroSection {...aboutus} />
    </motion.div>
  );
}

export default Home;
