import React from "react";
import HeroSection from "../../HeroSection";
import Member from "../../Member";
import { members, apply } from "./Data";

function OurTeam() {
  return (
    <>
      <HeroSection {...members} />
      <HeroSection {...apply} />
    </>
  );
}

export default OurTeam;
