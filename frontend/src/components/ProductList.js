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
import {
  mugcup_1,
  mugcup_2,
  sample,
} from "./pages/Collections/DataRotatingImages";

import { Col, Row } from "antd";

const { Meta } = Card;
const ProductList = (props, idex) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
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
        product.date.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <Tabs className="main-category" forceRenderTabPanel defaultIndex={0}>
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <TabList>
        <Tab>All</Tab>

        <Tab>Fashion Institute of Technology</Tab>
        <Tab>Stony Brook University</Tab>
        <Tab>Assorted Goods</Tab>
        <Tab>Apparels</Tab>
      </TabList>

      {/* All */}
      <TabPanel>
        <Tabs forceRenderTabPanel>
          <div className="product-list">{searchResults.map(Product)}</div>

          <ul>
            <li>All Items</li>
          </ul>
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
            <div className="product-list">{ProductDataAll.map(Product)}</div>

            <ul>
              <li>FIT All Goods </li>
              <li>FIT All Apparels</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>FIT Goods 1</li>
              <li>FIT Goods 2</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>FIT Apparel 1</li>
              <li>FIT Apparel 2</li>
            </ul>
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
            <ul>
              <li>SBU Goods 1</li>
              <li>SBU Goods 2</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>SBU Apparel 1</li>
              <li>SBU Apparel 2</li>
            </ul>
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
            <ul>
              <li>FIT Goods 1</li>
              <li>FIT Goods 2</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>SBU Goods 1</li>
              <li>SBU Goods 2</li>
            </ul>
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
            <ul>
              <li>All Apparel</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>FIT Apparel 1</li>
              <li>FIT Apparel 2</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul>
              <li>SBU Apparel 1</li>
              <li>SBU Apparel 2</li>
            </ul>
          </TabPanel>
        </Tabs>
      </TabPanel>
      {/* Apparels */}
    </Tabs>
  );
};

export default ProductList;
