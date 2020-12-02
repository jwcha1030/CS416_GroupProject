import React, { useLayoutEffect, useState, useEffect } from "react";
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
import { trackPromise } from "react-promise-tracker"; //API CALL LOADER

var axios = require("axios");

// This component is in the collections page, below the CollectionsMain.
// This includes search bar, filtering tabs, and layouts of collection

//Strings for mapping and filtering
const NONE_STRING = "None";
const ERROR_STRING = "Error";
const FIT_STRING = "FIT";
const SBU_STRING = "SBU";
const GOODS_STRING = "Goods";
const APPARELS_STRING = "Apparels";

const schoolMapping = (school_id) => {
  if (school_id === 0) {
    return NONE_STRING;
  } else if (school_id === 1) {
    return SBU_STRING;
  } else if (school_id === 2) {
    return FIT_STRING;
  } else {
    return ERROR_STRING;
  }
};

const typeMapping = (type_id) => {
  if (type_id === 0) {
    return NONE_STRING;
  } else if (type_id === 1) {
    return GOODS_STRING;
  } else if (type_id === 2) {
    return APPARELS_STRING;
  } else {
    return ERROR_STRING;
  }
};
const compareStrings = (a, b) => {
  return a?.toLowerCase().includes(b?.toLowerCase());
};

const ProductList = (props, index) => {
  const [loading, setLoading] = useState(true);
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

  //ALL COLLECTION ITEMS LIST.. SETTING UP DATA FROM BACKEND
  const [allCollectionItems, setData] = useState([{}]);

  useEffect(() => {
    // trackPromise(
    if (loading) {
      axios
        .get(
          "https://sunyk-msc-backend.herokuapp.com/collection/item/get_all/with_collection_info/"
        )
        .then(function (response) {
          if (response.status == 200) {
            if (response.data.res_code == 1) {
              console.log(
                "Successfully connected to API for all data..." +
                  response.data.res_msg
              );
              console.log(response.data.results);
              setData(response.data.results);
              setLoading(false);
              // console.log(response.data.results[0].name); //returns some name
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
    }
    // );
  }, []);
  // END OF LOADING DATA

  // FILTERING BY TABS: ALL, FIT_ALL, FIT_GOODS, SBU_ALL, SBU_GOODS, ALL_APPARELS, ALL_GOODS
  useEffect(() => {
    //all tab filtering
    console.log("Loading data to filter...");
    console.log(allCollectionItems);

    const results = allCollectionItems.filter(
      (product) =>
        product?.name?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        product?.desc?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        typeMapping(product.type_id)
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        schoolMapping(product.school_id)
          ?.toLowerCase()
          ?.includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);

    //fit all tab filtering
    const fitAll = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product?.school_id), FIT_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );

    setFitAll(fitAll);

    //fit goods tab filtering
    const fitGoods = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), FIT_STRING) &&
        compareStrings(typeMapping(product.type_id), GOODS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );

    setFitGoods(fitGoods);

    //fit apparels tab filtering
    const fitApparels = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), FIT_STRING) &&
        compareStrings(typeMapping(product.type_id), APPARELS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setFitApparels(fitApparels);

    const sbuAll = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), SBU_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuAll(sbuAll);

    const sbuGoods = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), SBU_STRING) &&
        compareStrings(typeMapping(product.type_id), GOODS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuGoods(sbuGoods);

    const sbuApparels = allCollectionItems.filter(
      (product) =>
        compareStrings(schoolMapping(product.school_id), SBU_STRING) &&
        compareStrings(typeMapping(product.type_id), APPARELS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setSbuApparels(sbuApparels);

    const goodsAll = allCollectionItems.filter(
      (product) =>
        compareStrings(typeMapping(product.type_id), GOODS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setGoodsAll(goodsAll);
    const apparelsAll = allCollectionItems.filter(
      (product) =>
        compareStrings(typeMapping(product.type_id), APPARELS_STRING) &&
        (compareStrings(product.name, searchTerm) ||
          compareStrings(product.desc, searchTerm) ||
          compareStrings(typeMapping(product.type_id), searchTerm) ||
          compareStrings(schoolMapping(product.school_id), searchTerm))
    );
    setApparelsAll(apparelsAll);
  }, [searchTerm, allCollectionItems]);

  if (loading) {
    return (
      <p align="center" style={{ fontSize: "2rem" }}>
        Loading collection items...
      </p>
    );
  }
  // END OF FILTERING BY TABS

  return (
    <Tabs className="main-category" forceRenderTabPanel defaultIndex={0}>
      <h1 className="collections-title" align="center">
        MERCHANDISING SOCIETY COLLECTIONS
      </h1>
      <br />
      <div className="row">
        <div className="mx-auto" style={{ width: "1000px" }}>
          <SearchOutlined className="search-outline" />
          {/* SEARCH BAR */}
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
