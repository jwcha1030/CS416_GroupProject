import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../HeroSection";
import { collections, ourteam, aboutus } from "./Data";
import msc_banner from "../../../images/msc_banner.JPG";
import msc_banner2 from "../../../images/6.png";
import msc_banner3 from "../../../images/7.png";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={msc_banner} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={msc_banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block" src={msc_banner3} alt="Thrid slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HeroSection {...collections} />

      <HeroSection {...ourteam} />

      <HeroSection {...aboutus} />
    </div>
  );
}

export default Home;
