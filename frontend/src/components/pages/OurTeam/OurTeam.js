import React from "react";
import HeroSection from "../../HeroSection";
import { members } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

import Member from "../../Member";
import { DataMembers } from "./DataMembers";
import Footer from "../Footer.js/Footer";

// import { Card, Icon, Image } from "semantic-ui-react";

function OurTeam() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroSection {...members} />
      </motion.div>

      <div className="members-list">{DataMembers.map(Member)}</div>
      <Footer />
    </div>
  );
}

export default OurTeam;
