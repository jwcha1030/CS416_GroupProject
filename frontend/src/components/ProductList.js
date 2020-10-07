import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductList.css";
import Product from "./Product";
import { Card } from "antd";
import test from "../images/model_white.jpg";
import "antd/dist/antd.css";
import ProductDataAll from "./ProductDataAll";
import renderImages from "./RotatingImage";
import Rotation from "react-rotation";
import "./RotatingImage.css";
import { SearchOutlined } from "@ant-design/icons";

import {
  mugcup_1,
  mugcup_2,
  sample,
} from "./pages/Collections/DataRotatingImages";

const { Meta } = Card;
const ProductList = (props, idex) => {
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

  React.useEffect(() => {
    const results = ProductDataAll.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.type.toLowerCase().includes(searchTerm) ||
        product.school.toLowerCase().includes(searchTerm) ||
        product.date_added.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);

    const fitAll = searchResults.filter(
      (product) => product.school.toLowerCase() == "fit"
    );
    setFitAll(fitAll);

    const fitGoods = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "fit" &&
        product.type.toLowerCase().includes("good")
    );
    setFitGoods(fitGoods);

    const fitApparels = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "fit" &&
        product.type.toLowerCase().includes("apparel")
    );
    setFitApparels(fitApparels);

    const sbuAll = ProductDataAll.filter(
      (product) => product.school.toLowerCase() == "sbu"
    );
    setSbuAll(sbuAll);

    const sbuGoods = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "sbu" &&
        product.type.toLowerCase().includes("good")
    );
    setSbuGoods(sbuGoods);

    const sbuApparels = ProductDataAll.filter(
      (product) =>
        product.school.toLowerCase() == "sbu" &&
        product.type.toLowerCase().includes("apparel")
    );
    setSbuApparels(sbuApparels);

    const goodsAll = ProductDataAll.filter(
      (product) => product.type.toLowerCase().includes("good") //to avoid good vs goods mix
    );
    setGoodsAll(goodsAll);
    const apparelsAll = ProductDataAll.filter(
      (product) => product.type.toLowerCase().includes("apparel") //to avoid apparel vs apparels mix
    );
    setApparelsAll(apparelsAll);
  }, [searchTerm]);

  return (
    <Tabs className="main-category" forceRenderTabPanel defaultIndex={0}>
      <div className="row">
        <input
          className="search"
          type="text"
          placeholder='Search  "Hoodies"'
          value={searchTerm}
          onChange={handleChange}
        />
        <SearchOutlined style={{ marginTop: "3rem", fontSize: "3rem" }} />
      </div>
      <div className="upperTab">
        <TabList>
          <Tab>All</Tab>
          <Tab>Fashion Institute of Technology</Tab>
          <Tab>Stony Brook University</Tab>
          <Tab>Assorted Goods</Tab>
          <Tab>Apparels</Tab>
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
              <Tab>FIT Assorted Goods</Tab>
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
              <Tab>SBU Assorted Goods</Tab>
              <Tab>SBU Apparels</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{sbuAll.map(Product)}</div>

              <div className="product-list">
                <Rotation
                  autoPlay={false}
                  cycle={true}
                  scroll={false}
                  className="rotating-image"
                >
                  {mugcup_1.map(renderImages)}
                </Rotation>
                <Rotation
                  autoPlay={false}
                  cycle={true}
                  scroll={false}
                  className="rotating-image"
                >
                  {mugcup_2.map(renderImages)}
                </Rotation>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="product-list">{sbuGoods.map(Product)}</div>
              <div className="product-list">
                <Rotation
                  autoPlay={false}
                  cycle={true}
                  scroll={false}
                  className="rotating-image"
                >
                  {mugcup_1.map(renderImages)}
                </Rotation>
                <Rotation
                  autoPlay={false}
                  cycle={true}
                  scroll={false}
                  className="rotating-image"
                >
                  {mugcup_2.map(renderImages)}
                </Rotation>
              </div>
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
              <Tab>All</Tab>

              <Tab>Fashion Institute of Technology</Tab>
              <Tab>Stony Brook University</Tab>
            </TabList>
            <TabPanel>
              <div className="product-list">{goodsAll.map(Product)}</div>

              <div className="product-list">
                <Rotation
                  autoPlay={false}
                  cycle={true}
                  scroll={false}
                  className="rotating-image"
                >
                  {sample.map(renderImages)}
                </Rotation>
              </div>
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
              <Tab>All</Tab>
              <Tab>Fashion Institute of Technology</Tab>
              <Tab>Stony Brook University</Tab>
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
