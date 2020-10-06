import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ProductList.css";

function ProductList() {
  return (
    <Tabs className="main-category" forceRenderTabPanel defaultIndex={0}>
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
            <ul>
              <li>SBU All Goods</li>
              <li>SBU All Apparel</li>
            </ul>
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
            <ul>
              <li>All Goods</li>
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
}

export default ProductList;
