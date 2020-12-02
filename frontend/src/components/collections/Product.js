import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "antd";
import "antd/dist/antd.css";

import "./RotatingImage.css";
import ReactImageAppear from "react-image-appear";
import "./Product.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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

// NOTE: Product.js is the small card component of product you see in Collection's Page.
// List of these are ProductList.js
// Detailed Product Page is in ProductDetailPage.js ( in CollectionsDetailedProduct folder )
const renderProducts = (props, index) => {
  return (
    <div>
      <Card
        className="product-card"
        hoverable
        cover={
          <a href={`/collections/${props.id}`}>
            <ReactImageAppear
              className="cover-image"
              src={props.img}
              alt={"img"}
              animation="fillIn"
              animationDuration={Math.random() * 2 + 1 + "s"}
            />
          </a>
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
        <Meta className="product-properties" title={props.title} />

        <div className="price">
          <span className="won">₩ </span>
          <NumberFormat
            value={props.price}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>

        <div className="school-type">
          {props.school == "SBU" ? (
            <img className="sbu-fit-image" src={SBU_IMG} />
          ) : (
            <img className="sbu-fit-image" src={FIT_IMG} />
          )}
          {props.school} {props.type}
        </div>

        <div className="count-wrapper">
          <MdRemoveRedEye />
          <span className="count-number">{props.click_count}</span>
        </div>
        {/* <br /> */}
        {/* <p className="product-description">{props.description}</p> */}
      </Card>
    </div>
  );
};

export default renderProducts;
