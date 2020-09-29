import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Collections from "./components/pages/Collections/Collections";
import OurTeam from "./components/pages/OurTeam/OurTeam";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer.js/Footer";

import { AnimatePresence, motion } from "framer-motion";

// import counterpart from 'counterpart';
// import Translate from 'react-traslate-component';

// counterpart.registerTranslations('en',{

// })
//https://www.youtube.com/watch?v=PM3SrgdYvrw&ab_channel=Chigabiga
// Translation Tutorial

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/collections" component={Collections} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/ourteam" component={OurTeam} />
        </Switch>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;
