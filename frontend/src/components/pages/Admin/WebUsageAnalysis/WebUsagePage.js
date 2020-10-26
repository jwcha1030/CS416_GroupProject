import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import BarGraph from "./BarGraph";
import {webUsageData} from "./WebUsageData";
import DataTable from "../EditContents/DataTable";

export default function (props) {
  const headers = Object.keys(webUsageData[0]);
  return (
    <div className="web-analysis__section">
      <Link style={{fontSize: "17px"}} className="goBack" to="/admin">
        <IoIosArrowBack/>Go Back
      </Link>
      <div className="web-analysis__wrapper">
        <h1 style={{textAlign: "center", fontWeight: "bold"}} className="web-analysis__header">
          Web Usage Analysis
        </h1>
        <div className="web-analysis__body-container">
          <div className="web-analysis__charts-wrapper">
            <BarGraph/>
          </div>
          <div className="web-analysis__table-wrapper">
            <h3 style={{color: "black", fontWeight: "bold"}} className="web-analysis__table-header">
              Analysis Details
            </h3>
            <DataTable data={webUsageData} headers={headers}/>
          </div>
        </div>
      </div>
    </div>
  );
}
