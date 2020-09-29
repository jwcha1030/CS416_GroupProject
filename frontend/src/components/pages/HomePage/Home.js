import React, { useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../HeroSection";
import { collections, ourteam, aboutus } from "./Data";
import renderCarousel from "../../Carousel";
import { carouselData } from "./CarouselData";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/esm/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 3000, // values from 0 to 3000, with step 50ms
      delay: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations});
    });
  }, []);
  //https://github.com/michalsnik/aos#animations AOS animation on scroll library for anmation on scrolling added**
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* now carousel is updated in carouselData.js */}
      <Carousel>{carouselData.map(renderCarousel)}</Carousel>

      <div data-aos="slide-right">
        <HeroSection {...collections} />
      </div>

      <div data-aos="slide-right">
        <HeroSection {...ourteam} />
      </div>

      <div data-aos="slide-right">
        <HeroSection {...aboutus} />
      </div>
    </motion.div>
  );
}

export default Home;
