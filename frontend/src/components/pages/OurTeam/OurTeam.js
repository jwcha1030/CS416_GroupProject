import React from "react";
import HeroSection from "../../HeroSection";
import Member from "../../Member";
import { members } from "./Data";
import { AnimatePresence, motion } from "framer-motion";
import renderMembers from "../../Member";
import { DataMembers } from "./DataMembers"
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
      <div className="members-list">
        {DataMembers.map(renderMembers)}
      </div>
    </div>

  );


}

export default OurTeam;
