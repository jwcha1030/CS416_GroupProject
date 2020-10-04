import msc_banner from "../../../images/msc_banner.JPG";
import msc_banner2 from "../../../images/msc_banner2.jfif";
import msc_banner3 from "../../../images/msc_banner3.jpg";
import msc_banner4 from "../../../images/msc_banner4.jpg";
import model_white from "../../../images/model_white.jpg";
import msc from "../../../images/MSC.jpg";

export const collections = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "MSC Collections",
  headline: "Discover new products we made!",
  description: "2020 Fall New Arrivals are here!",
  buttonTo: "/collections",
  buttonLabel: "COLLECTIONS",
  imgStart: "",
  img: msc_banner3,
  alt: "image",
};

export const ourteam = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "MSC Our Team",
  headline: "Meet our members",
  description: "Website is in progress",
  buttonLabel: "OUR TEAM",
  buttonTo: "/ourteam",
  imgStart: "",
  img: model_white,
  alt: "image",
};

export const aboutus = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "MSC About Us",
  headline: "About Us",
  description: "MSC makes merchandise for FIT and SBU.",
  buttonTo: "/aboutus",
  buttonLabel: "ABOUT US",
  imgStart: "",
  img: msc,
  alt: "image",
};
