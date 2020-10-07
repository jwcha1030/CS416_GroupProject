import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Collections from "./components/pages/Collections/Collections";
import OurTeam from "./components/pages/OurTeam/OurTeam";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import AdminLogin from "./components/pages/AdminLogin/AdminLogin";
import Navbar from "./components/Navbar";
import ScrollToTop from 'react-router-scroll-top'

import { AnimatePresence, motion } from "framer-motion";
import Admin from "./components/pages/Admin/Admin";
import CarouselEdit from "./components/pages/Admin/EditContents/EditCarousel/CarouselEdit";
import CollectionsEdit from "./components/pages/Admin/EditContents/EditCollections/CollectionsEdit";
import OurTeamEdit from "./components/pages/Admin/EditContents/OurTeamEdit";
import AboutUsEdit from "./components/pages/Admin/EditContents/AboutUsEdit";

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
            <Route path="/admin/collections_edit" component={CollectionsEdit}/>
            <Route path="/admin/team_edit" component={OurTeamEdit}/>
            <Route path="/admin/about_edit" component={AboutUsEdit}/>
            <Route path="/adminlogin" component={AdminLogin} />

          </Switch>
        </AnimatePresence>
      </ScrollToTop>

    </Router>
  );
}

export default App;
