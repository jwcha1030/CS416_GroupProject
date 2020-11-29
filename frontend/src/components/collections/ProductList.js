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

  const [allProducts, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://sunyk-msc-backend.herokuapp.com/collection/get_all/")
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            // console.log(response.data.result)
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

  React.useEffect(() => {
    const results = ProductDataAll.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.date_added.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    const fitAll = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "fit" &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFitAll(fitAll);

    const fitGoods = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "fit" &&
        product.type.toLowerCase().includes("good") &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFitGoods(fitGoods);

    const fitApparels = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "fit" &&
        product.type.toLowerCase().includes("apparel") &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFitApparels(fitApparels);

    const sbuAll = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "sbu" &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSbuAll(sbuAll);

    const sbuGoods = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "sbu" &&
        product.type.toLowerCase().includes("good") &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSbuGoods(sbuGoods);

    const sbuApparels = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "sbu" &&
        product.type.toLowerCase().includes("apparel") &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setSbuApparels(sbuApparels);

    const goodsAll = ProductDataAll.filter(
      (product) =>
        product.type.toLowerCase().includes("good") && //to avoid good vs goods mix
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setGoodsAll(goodsAll);
    const apparelsAll = ProductDataAll.filter(
      (product) =>
        product.type.toLowerCase().includes("apparel") && //to avoid apparel vs apparels mix
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.date_added.toLowerCase().includes(searchTerm.toLowerCase()))
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
