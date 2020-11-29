import React, { useState, useEffect } from "react";
import HeroSection from "../../components/hero_section/HeroSection";
import { members } from "./Data";
import { motion } from "framer-motion";

import Member from "../../components/member/Member";
import { DataMembers } from "./DataMembers";
import Footer from "../../components/footer/Footer";

// import { Card, Icon, Image } from "semantic-ui-react";
var axios = require("axios");

function OurTeam() {
  const [allMembers, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://sunyk-msc-backend.herokuapp.com/team_page_person/get_all/")
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            console.log(response.data.results);
            setData(response.data.results);
          } else {
          }
        } else {
        }
      })
      .catch(function (error) {
        console.log("code 0" + error);
      });
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HeroSection {...members} />
      </motion.div>

      <div className="members-list">{allMembers.map(Member)}</div>
      <Footer />
    </div>
  );
}

export default OurTeam;
