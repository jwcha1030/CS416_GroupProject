import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Collections from "./pages/Collections/Collections";
import OurTeam from "./pages/OurTeam/OurTeam";
import AboutUs from "./pages/AboutUs/AboutUs";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "react-router-scroll-top";
import ProductDetailPage from "./pages/CollectionsDetailedProduct/ProductDetailPage";

import { AnimatePresence} from "framer-motion";
import Admin from "./pages/Admin/Admin";
import CarouselEdit from "./pages/Admin/EditContents/EditCarousel/CarouselEdit";
import CollectionsEdit from "./pages/Admin/EditContents/EditCollections/CollectionsEdit";
import OurTeamEdit from "./pages/Admin/EditContents/EditOurTeam/OurTeamEdit";
import SubscriptionEdit from "./pages/Admin/ManageSubscriptions/SubscriptionEdit";
import WebUsageAnalysis from "./pages/Admin/WebUsageAnalysis/WebUsagePage";
import Axios from "axios";
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
            <Route path="/collections" exact component={Collections} />
            <Route path="/collections/:id" component={ProductDetailPage} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/ourteam" component={OurTeam} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/carousel_edit" component={CarouselEdit} />
            <Route path="/admin/collections_edit" component={CollectionsEdit} />
            <Route path="/admin/subscription_edit" component={SubscriptionEdit}/>
            <Route path="/admin/web_usage" component={WebUsageAnalysis}/>
            <Route path="/admin/team_edit" component={OurTeamEdit} />

            <Route path="/adminlogin" component={AdminLogin} />
          </Switch>
        </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
