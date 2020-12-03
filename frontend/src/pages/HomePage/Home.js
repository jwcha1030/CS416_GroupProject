import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../components/hero_section/HeroSection";
import { collections, ourteam, aboutus } from "./Data";
import carouselItem from "../../components/home_carousel/CarouselItem";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/esm/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/footer/Footer";
import LOADER_GIF from "../../images/loading.gif";

var axios = require("axios");

function Home() {
  const [loading, setLoading] = useState(true);

  //Home Carousel API Call-----------------------------------------------------------------------------
  const [carouselItemsFromBackend, setData] = useState([{}]);
  useEffect(() => {
    //https://github.com/michalsnik/aos#animations
    //AOS animation on scroll library for animation on scrolling
    Aos.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      delay: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false,
      disable: function () {
        // DISABLING AOS ON MOBILE/ OR WHEN THERE'S SIDE BAR - NAV BAR TRANSITION
        var maxWidth = 1200; // IT HAS CONFLICTS WITH OUR MOBILE VIEW SIDE BAR
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://sunyk-msc-backend.herokuapp.com/home_page_carousel/get_all/"
      )
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            setData(response.data.results);
            setLoading(false);
          } else {
            console.log("Unexpected error: res_code 0");
          }
        } else {
        }
      })
      .catch(function (error) {
        console.log("Code 0", error);
      });
  }, []);
  //Home Carousel API Call-----------------------------------------------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/*-carousels is the carousel items data from the backend
         -renderCarousel is the carousel component */}
      {loading ? (
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={LOADER_GIF}
        />
      ) : (
        <Carousel>{carouselItemsFromBackend.map(carouselItem)}</Carousel>
      )}
      {/* COLLECTIONS */}
      <div data-aos="slide-left">
        <HeroSection {...collections} />
      </div>
      {/* OUR TEAM */}
      <div data-aos="slide-left">
        <HeroSection {...ourteam} />
      </div>
      {/* ABOUT US*/}
      <div data-aos="slide-left">
        <HeroSection {...aboutus} />
      </div>

      {/* FOOTER */}
      <Footer />
    </motion.div>
  );
}

export default Home;
