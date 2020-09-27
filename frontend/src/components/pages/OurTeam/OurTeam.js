import React from "react";
import HeroSection from "../../HeroSection";
import Member from "../../Member";
import { members, apply } from "./Data";
import { AnimatePresence, motion } from "framer-motion"

function OurTeam() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}} >
      
      <HeroSection {...members} />
      <HeroSection {...apply} />
    </motion.div>
  );
}

export default OurTeam;
