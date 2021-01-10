import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "antd";
import "antd/dist/antd.css";

import "./RotatingImage.css";
import ReactImageAppear from "react-image-appear";
import "./Product.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import Axios from "axios";

import { MdRemoveRedEye } from "react-icons/md";
import NumberFormat from "react-number-format";

//Sample 360 view images
// import renderImages from "./RotatingImage";
// import Rotation from "react-rotation";
// import {
//   mugcup_1,
//   mugcup_2,
//   sample,
// } from "../../pages/Collections/DataRotatingImages";

import SBU_IMG from "../../images/sbu3.png";
import FIT_IMG from "../../images/fit3.png";
const { Meta } = Card;
const axios = require("axios");

const NONE_STRING = "None";
const ERROR_STRING = "Error";
const LOADING_STRING = "Loading...";

const FIT_STRING = "FIT";
const SBU_STRING = "SBU";
const GOODS_STRING = "Goods";
const APPARELS_STRING = "Apparels";

const schoolMappingStr = (school_id) => {
  if (school_id === 0) {
    return NONE_STRING;
  } else if (school_id === 1) {
    return SBU_STRING; //school logo img
  } else if (school_id === 2) {
    return FIT_STRING; //school logo img
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

const viewCountIncrement = (id) => {
  axios
    .post(
      "https://sunyk-msc-backend.herokuapp.com/collection/item/click/" +
      id +
      "/"
    )
    .then((response) => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          // Everything worked correctly
          // Do something with the returned data
          console.log("View Count Post SUCCESS", response.data.res_msg);

          // } else if (){
          // Check other res_code with else if
          // }
        } else {
          // Unhandled res_code
          console.log("Post: Unhandled res_code");
        }
      } else {
        // TODO handle unable to connect with database
        console.log("Post: unable to connect with database");
      }
    })
    .catch(function (error) {
      // TODO handle error with the call
      console.log("Post: Call error");
      console.log(error);
    });
};

// NOTE: Product.js is the small card component of product you see in Collection's Page.
// List of these are ProductList.js
// Detailed Product Page is in ProductDetailPage.js ( in CollectionsDetailedProduct folder )
const renderProducts = (props, index) => {
  return (
    <div>
      <Link
        to={`/collections/${props.id}`}
        onClick={() => {
          viewCountIncrement(props.id);
        }}
      >
        <Card
          className="product-card"
          hoverable
          cover={
            <ReactImageAppear
              className="cover-image"
              key={props.id}
              src={props.main_img}
              alt={"img"}
              animation="fillIn"
              animationDuration={Math.random() * 1 + .5 + "s"}
            />
            //   <Rotation
            //   autoPlay={false}
            //   cycle={true}
            //   scroll={false}
            //   className="rotating-image"
            // >
            //   {mugcup_1.map(renderImages)}
            // </Rotation>
          }
        >
          <Meta className="product-properties" title={props.name} />

          <div className="price">
            <span className="won">₩ </span>
            <NumberFormat
              value={props.price}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>

          <div className="school-type">
            {schoolMappingStr(props.school_id) == SBU_STRING ? (
              <img className="sbu-fit-image" src={SBU_IMG} />
            ) : (
                <img className="sbu-fit-image" src={FIT_IMG} />
              )}
            {schoolMappingStr(props.school_id)} {typeMapping(props.type_id)}
          </div>

          <div className="count-wrapper">
            <MdRemoveRedEye />
            <span className="count-number">{props.click_count}</span>
          </div>
          {/* <br /> */}
          {/* <p className="product-description">{props.description}</p> */}
        </Card>
      </Link>
    </div>
  );
};

export default renderProducts;
