import React, { useEffect, useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../hero_section/HeroSection";
import { collections, ourteam, aboutus } from "./Data";
import renderCarousel from "../../home_carousel/Carousel";
import { CarouselData } from "./CarouselData";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/esm/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../footer/Footer";
import ScrollToTop from "react-router-scroll-top";


var axios = require('axios')

 
function Home() {

  //Home Carousel API Call-----------------------------------------------------------------------------
  const [carousels, setData] = useState([{}]);
  useEffect(() => {
    Aos.init({
      duration: 3000, // values from 0 to 3000, with step 50ms
      delay: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations});
      once: true,

    });
  }, []);
  //https://github.com/michalsnik/aos#animations AOS animation on scroll library for animation on scrolling added**

  useEffect(() => {
    axios.get('https://sunyk-msc-backend.herokuapp.com/home_page_carousel/get_all/',)
    .then(function (response) {
      if(response.status == 200){
        if(response.data.res_code == 1){
          setData(response.data.results)
        } else {
        }
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
   },[]);
  //Home Carousel API Call-----------------------------------------------------------------------------

   return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      
      {/* now carousel is updated in CarouselData.js */}
      <Carousel>{carousels.map(renderCarousel)}</Carousel>
       
      <div data-aos="slide-left">
        <HeroSection {...collections} />
      </div>

      <div data-aos="slide-left">
        <HeroSection {...ourteam} />
      </div>

         <HeroSection {...aboutus} /> 
         {/* Theres a bug in mobile view when adding aos on the last component... */}
    
      <Footer />
      
    </motion.div>
  );
}

export default Home;