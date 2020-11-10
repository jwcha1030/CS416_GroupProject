import React,{useState,useEffect} from "react";
import HeroSection from "../../HeroSection";
import { members } from "./Data";
import {motion } from "framer-motion";

import Member from "../../Member";
import { DataMembers } from "./DataMembers";
import Footer from "../Footer.js/Footer";

// import { Card, Icon, Image } from "semantic-ui-react";
var axios = require('axios')

function OurTeam() {
  const [allMembers, setData] = useState([{}]);
  useEffect(() => {
    axios.get('https://sunyk-msc-backend.herokuapp.com/team_page_person/get_all/',)
    .then(function (response) {
      if(response.status == 200){ 
        if(response.data.res_code == 1){
          setData(response.data.results)
        } else {
        }
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
   },[]);
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
