import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Collections from "./components/pages/Collections/Collections";
import OurTeam from "./components/pages/OurTeam/OurTeam";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Navbar from "./components/Navbar";
import ScrollToTop from 'react-router-scroll-top'

import { AnimatePresence, motion } from "framer-motion";
import Admin from "./components/pages/Admin/Admin";
import CarouselEdit from "./components/pages/Admin/EditContents/CarouselEdit";

// import counterpart from 'counterpart';
// import Translate from 'react-traslate-component';

// counterpart.registerTranslations('en',{

// })
//https://www.youtube.com/watch?v=PM3SrgdYvrw&ab_channel=Chigabiga
// Translation Tutorial

function App() {
  return (

    <Router>

      <ScrollToTop>
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/collections" component={Collections} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/ourteam" component={OurTeam} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/carousel_edit" component={CarouselEdit}/>

          </Switch>
        </AnimatePresence>
      </ScrollToTop>

    </Router>
  );
}

export default App;
