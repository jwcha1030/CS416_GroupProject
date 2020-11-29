import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Card } from "antd";
import "antd/dist/antd.css";
import ProductList from "./ProductList";
import renderImages from "./RotatingImage";
import Rotation from "react-rotation";
import "./RotatingImage.css";
import ReactImageAppear from "react-image-appear";
import "./Product.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  mugcup_1,
  mugcup_2,
  sample,
} from "../../pages/Collections/DataRotatingImages";

const { Meta } = Card;
const toolTipMessage = "Need Help? Reach out to us!";

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
          <a
            href={`/collections/${props.id}`}>
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
        <Meta
          className="product-properties"
          title={props.title}
          description={

            " ₩" +
            props.price +
            " | " +
            props.school +
            " " +
            props.type


          }
        />

        <br />
        <div className="additional">
          <p className="product-description">{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default renderProducts;
