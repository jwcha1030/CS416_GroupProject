import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../../HeroSection";
import { collections, ourteam, aboutus } from "./Data";
import msc_banner from "../../../images/msc_banner.JPG";
import msc_banner2 from "../../../images/msc_banner2.jfif";
import msc_banner3 from "../../../images/msc_banner3.jpg";
import msc_banner4 from "../../../images/msc_banner4.jpg";


function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="center-block" src={msc_banner} alt="First slide" />
          <Carousel.Caption>
            <h3>Merchadising Society Club</h3>
            <p>We Make Merchandise for Fashion Institute of Technology and Stony Brook University</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="center-block" src={msc_banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Retail Revolution Shop</h3>
            <p>Academic Building C, 6th Floor. Come Visit!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="center-block" src={msc_banner3} alt="Thrid slide" />
          <Carousel.Caption>
            <h3>2020 Summer Collections</h3>
            <p>Fashion Starts at MSC</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="center-block" src={msc_banner4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>2020 Summer Sales</h3>
            <p>For Students, By Students</p>
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
