import React from "react";
import HeroSection from "../../HeroSection";
import Member from "../../Member";
import { temp1, temp2 } from "./Data";

function OurTeam() {
  return (
    <>
      <HeroSection {...temp1} />
      <HeroSection {...temp2} />
    </>
  );
}

export default OurTeam;
