import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import BarGraph from "./BarGraph";
import DataTable from "../EditContents/DataTable";
let sampleData= [
  {
    id:1,
    name: "2020 Hoodie",
    num_of_clicked: 5,
    num_of_inquiries: 2
  },
  {
    id:2,
    name: "2020 Shoes",
    num_of_clicked: 10,
    num_of_inquiries: 1
  },
  {
    id:3,
    name: "2020 Shorts",
    num_of_clicked: 11,
    num_of_inquiries: 5
  }
];
export default function WebUsagePage() {
  const [data, setData] = useState(sampleData);
  const [headers,setHeaders] = useState(Object.keys(sampleData[0]));

  let axios = require('axios');
  const fetchAllData = async () => {
    await axios.get("https://sunyk-msc-backend.herokuapp.com/admin/analysis/get_all/")
      .then(response => {
        // console.log(response.data);
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            setData(response.data.results);
            setHeaders(Object.keys(response.data.results[0]));
            console.log("fetch complete");
          } else {
            // Unhandled res_code
            alert("Fetch: Unhandled res_code", response.data.res_code);
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Fetch: Call error");
        console.log(error);
      });
  };
  useEffect(  () => {
    if (!sessionStorage.getItem("isLoggedIn")){
      alert("You must log in!");
      window.location.href="/adminlogin";
      return;
    }
    fetchAllData();
  }, []); //fetch once
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
            <BarGraph dataInput={data}/>
          </div>
          <div className="web-analysis__table-wrapper">
            <h3 style={{color: "black", fontWeight: "bold"}} className="web-analysis__table-header">
              Analysis Details
            </h3>
            <DataTable data={data} headers={headers}/>
          </div>
        </div>
      </div>
    </div>
  );
}
