import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductList.css";
import Product from "./Product";
import { Card } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import ALL_TAB_IMAGE from "../../images/all.png";
import FIT_TAB_IMAGE from "../../images/fit.jpg";
import SBU_TAB_IMAGE from "../../images/sbu2.png";
import APPARELS_TAB_IMAGE from "../../images/tab_apparels.JPG";
import GOODS_TAB_IMAGE from "../../images/tab_goods.JPG";

import "antd/dist/antd.css";
import ProductDataAll from "./ProductDataAll";
import { SearchOutlined } from "@ant-design/icons";

var axios = require("axios");

//This component is in the collections page, after the CollectionsMain.
// This includes search bar, filtering tabs, and layouts of collection
const schoolMapping = (school_id) => {
  if (school_id === 0) {
    return "None";
  } else if (school_id === 1) {
    return "SBU";
  } else if (school_id === 2) {
    return "FIT";
  } else {
    return "ERR";
  }
};

const typeMapping = (type_id) => {
  if (type_id === 0) {
    return "None";
  } else if (type_id === 1) {
    return "Goods";
  } else if (type_id === 2) {
    return "Apparel";
  } else {
    return "ERR";
  }
};

const compareStrings = (a, b) => {
  a.toLowerCase().includes(b.toLowerCase());
};

const ProductList = (props, index) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [fitAll, setFitAll] = React.useState([]);
  const [fitGoods, setFitGoods] = React.useState([]);
  const [fitApparels, setFitApparels] = React.useState([]);

  const [sbuAll, setSbuAll] = React.useState([]);
  const [sbuGoods, setSbuGoods] = React.useState([]);
  const [sbuApparels, setSbuApparels] = React.useState([]);

  const [goodsAll, setGoodsAll] = React.useState([]);
  const [apparelsAll, setApparelsAll] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //ALL COLLECTION ITEMS LIST.. everything...
  const [allCollectionItems, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get(
        "https://sunyk-msc-backend.herokuapp.com/collection/item/get_all/with_collection_info/"
      )
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            console.log(
              "Sucessfully connected to API for all data..." +
                response.data.res_msg +
                "...AND data.results: " +
                response.data.results
            );
            setData(response.data.results);
          } else {
            console.log("other than res_code 1...");
          }
        } else {
          console.log("Some connection error status not 200...");
        }
      })
      .catch(function (error) {
        console.log("code 0" + error);
      });
  }, []);

  React.useEffect(() => {
    const results = allCollectionItems.filter(
      (product) =>
        compareStrings(product.name, searchTerm) ||
        compareStrings(product.desc, searchTerm) ||
        compareStrings(typeMapping(product.type_id), searchTerm) ||
        compareStrings(schoolMapping(product.school_id), searchTerm)
    );

    setSearchResults(results);

    const fitAll = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "fit") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setFitAll(fitAll);

    const fitGoods = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "fit") &&
        compareStrings(typeMapping(product.type_id), "good") && // used .include() with good
        (compareStrings(product.name, searchTerm) || // to avoid good vs goods confusion
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setFitGoods(fitGoods);

    const fitApparels = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "fit") &&
        compareStrings(typeMapping(product.type_id), "apparel") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setFitApparels(fitApparels);

    const sbuAll = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "sbu") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuAll(sbuAll);

    const sbuGoods = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "sbu") &&
        compareStrings(typeMapping(product.type_id), "good") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuGoods(sbuGoods);

    const sbuApparels = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), "sbu") &&
        compareStrings(typeMapping(product.type_id), "apparel") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuApparels(sbuApparels);

    const goodsAll = allCollectionItems.filter(
      (product) =>
        compareStrings(typeMapping(product.type_id), "good") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setGoodsAll(goodsAll);
    const apparelsAll = allCollectionItems.filter(
      (product) =>
        compareStrings(typeMapping(product.type_id), "apparel") &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setApparelsAll(apparelsAll);
  }, [searchTerm]);

  return (
    <Tabs className="main-category" forceRenderTabPanel defaultIndex={0}>
      <h1 className="collections-title" align="center">
        MERCHANDISING SOCIETY COLLECTIONS
      </h1>
      <br />
      <div className="row">
        <div className="mx-auto" style={{ width: "1000px" }}>
          <SearchOutlined className="search-outline" />
          <input
            className="search"
            type="text"
            placeholder='Search  "Hoodie"'
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="upperTab">
        <TabList>
          <Tab>
            {" "}
            <img className="tab-logo" src={ALL_TAB_IMAGE} />
          </Tab>
          <Tab>
            {" "}
            <img className="tab-logo" src={FIT_TAB_IMAGE} />
          </Tab>
          <Tab>
            <img className="tab-logo" src={SBU_TAB_IMAGE} />
          </Tab>
          <Tab>
            <img className="tab-logo" src={GOODS_TAB_IMAGE} />
          </Tab>
          <Tab>
            <img className="tab-logo" src={APPARELS_TAB_IMAGE} />
          </Tab>
        </TabList>
      </div>
      <div className="nestedTab">
        {/* All */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <div className="product-list">{searchResults.map(Product)}</div>
          </Tabs>
        </TabPanel>
        {/* All */}

        {/* FIT */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>FIT All</Tab>
              <Tab>FIT Goods</Tab>
              <Tab>FIT Apparels</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{fitAll.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{fitGoods.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{fitApparels.map(Product)}</div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* FIT */}

        {/* SBU  */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>SBU All</Tab>
              <Tab>SBU Goods</Tab>
              <Tab>SBU Apparels</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{sbuAll.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{sbuGoods.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{sbuApparels.map(Product)}</div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* SBU */}

        {/* Goods */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>All Schools</Tab>
              <Tab>FIT</Tab>
              <Tab>SBU</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{goodsAll.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{fitGoods.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{sbuGoods.map(Product)}</div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* Goods */}

        {/* Apparels */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>All Schools</Tab>
              <Tab>FIT</Tab>
              <Tab>SBU</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{apparelsAll.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{fitApparels.map(Product)}</div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{sbuApparels.map(Product)}</div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* Apparels */}
      </div>
    </Tabs>
  );
};

export default ProductList;
