import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./InfoTab.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import SBU_IMG from "../../images/sbu.png";
import FIT_IMG from "../../images/fit.jpg";
import SUNYK_IMG from "../../images/suny.png";

//This is the school info tab compnent

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//for info tab map
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const themePrimary = createMuiTheme({
  palette: {
    primary: {
      main: "#ea7229",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    width: 700,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={themePrimary}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            aria-label="Description Tab"
          >
            <Tab label="Fashion Institute of Technology" {...a11yProps(0)} />
            <Tab label="Stony Brook University" {...a11yProps(1)} />
            <Tab label="SUNY Korea" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            style={{ fontSize: "30px" }}
            value={value}
            index={0}
            dir={theme.direction}
          >
            <div className="row">
              <div className="col">
                <br />
                <a href="https://www.fitnyc.edu" target="_blank">
                  <LazyLoadImage
                    effect="blur"
                    style={{ width: "180px" }}
                    src={FIT_IMG}
                  />
                </a>
                <br />
                <br />
              </div>
              <div className="col" id="school-description">
                The Fashion Institute of Technology (FIT) is a public college in
                Manhattan, New York City. It is part of the State University of
                New York (SUNY) and focuses on art, business, design, mass
                communication, and technology connected to the fashion industry.
                It was founded in 1944.
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="row">
              <div className="col">
                <br />
                <a href="https://www.stonybrook.edu" target="_blank">
                  <LazyLoadImage
                    effect="blur"
                    style={{ width: "180px" }}
                    src={SBU_IMG}
                  />
                </a>
                <br />
                <br />
              </div>
              <div className="col" id="school-description">
                The State University of New York at Stony Brook, more commonly
                known as Stony Brook University, is a public sea-grant and
                space-grant research university in Stony Brook, New York. It is
                one of four university centers of the SUNY system. It is the
                largest public university in NY by area.
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="row">
              <div className="col">
                <br />
                <a href="http://www.sunykorea.ac.kr/" target="_blank">
                  <LazyLoadImage
                    effect="blur"
                    style={{ width: "160px" }}
                    src={SUNYK_IMG}
                  />
                </a>
                <br />
                <br />
              </div>
              <div className="col" id="school-description">
                The State University of New York Korea (SUNY Korea) was
                established in March 2012 as the first American university in
                Songdo, Korea. SUNY Korea currently offers program degrees from
                SBU and FIT as an extended campus from New York.
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </MuiThemeProvider>
    </div>
  );
}
