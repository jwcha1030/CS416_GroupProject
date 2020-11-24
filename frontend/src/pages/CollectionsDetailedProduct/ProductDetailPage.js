import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../components/footer/Footer";
import ImageGallery from "react-image-gallery";
import "./ProductDetailPage.css";
import { Card } from "antd";
import renderImages from "../../components/collections/RotatingImage";
import Rotation from "react-rotation";
import "../../components/collections/RotatingImage.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PurchaseInquiryModal from "../../components/inquiry/PurchaseInquiry";

import { mugcup_1, mugcup_2, sample } from "../Collections/DataRotatingImages";
const { Meta } = Card;

const axios = require("axios");

const schoolMapping = (school_id) => {
  if (school_id === 0) {
    return "None";
  } else if (school_id === 1) {
    return "SBU";
  } else if (school_id === 2) {
    return "FIT";
  } else {
    return "ERR";
  }
};

const typeMapping = (type_id) => {
  if (type_id === 0) {
    return "None";
  } else if (type_id === 1) {
    return "Goods";
  } else if (type_id === 2) {
    return "Apparel";
  } else {
    return "ERR";
  }
};

function ProductDetailPage(props) {
  const cProductID = props.match.params.id; // the id of this product  11.25.2020 has only 2 in the backend data

  const apiBaseUrl =
    "https://sunyk-msc-backend.herokuapp.com/collection/item/get/" +
    cProductID +
    "/";

  const [productData, setData] = useState({});

  useEffect(() => {
    axios
      .get(apiBaseUrl)
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            console.log(
              "Successfully fetched product id " + cProductID,
              response.data.res_msg
            );
            setData(response.data.collection_item);
          } else {
            alert("unhandled res_code error. Please contact an admin.");
          }
        } else {
          alert("unhandled response status. Please contact an admin.");
        }
      })
      .catch(function (error) {
        console.log("code 0" + error);

        alert("unhandled error. Please contact an admin.");
      });
  }, []);

  console.log(productData);

  const [
    PurchaseInquiryModalShow,
    setPurchaseInquiryModalShow,
  ] = React.useState(false);
  const [RotatingImageModalShow, setRotatingImageModalShow] = React.useState(
    false
  );

  const images = [
    {
      original: productData["gallery_img1"],
      thumbnail: productData["gallery_img1"],
    },
    {
      original: productData["gallery_img2"],
      thumbnail: productData["gallery_img2"],
    },
    {
      original: productData["gallery_img3"],
      thumbnail: productData["gallery_img3"],
    },
    {
      original: productData["gallery_img4"],
      thumbnail: productData["gallery_img4"],
    },
    {
      original: productData["gallery_img5"],
      thumbnail: productData["gallery_img5"],
    },
    {
      original: productData["gallery_img6"],
      thumbnail: productData["gallery_img6"],
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className="details-container">
      <h1 style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
        Detailed Product ID: {cProductID}
      </h1>

      <RotatingImageModal
        //pass data to  modal using props...
        id={cProductID}
        show={RotatingImageModalShow}
        onHide={() => setRotatingImageModalShow(false)}
      />

      <div className="row" align="center">
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <ImageGallery lazyLoad={true} items={images} />
          <div className="rotating-images-modal">
            <Button
              variant="dark"
              size="lg"
              onClick={() => setRotatingImageModalShow(true)}
            >
              Launch 360 Degree View
            </Button>
          </div>
        </div>

        <div className="col-sm-1"></div>
        <div className="col-sm-4">
          <Card
            title={productData["name"]}
            extra={
              <Button
                className="make-inquiry"
                variant="dark"
                buttonStyle="btn--outline"
                onClick={() => setPurchaseInquiryModalShow(true)}
              >
                Purchase Inquiry
              </Button>
            }
          >
            <div className="row">
              <div className="col-sm-5 text-left">
                <h1> ₩{productData["price"]} </h1>
                <p> {schoolMapping(productData["school_id"])}</p>
                <p> {typeMapping(productData["type_id"])} </p>
                <p> {productData["click_count"]} Views (Clicks)</p>
              </div>
              <div className="col-sm-7 text-left">
                <p>{productData["desc"]}</p>
              </div>
            </div>
          </Card>
          <div className="col-sm-1"></div>
        </div>
      </div>
      {/* 
      pass values as props to the modal */}
      <PurchaseInquiryModal
        show={PurchaseInquiryModalShow}
        onHide={() => setPurchaseInquiryModalShow(false)}
        productID={cProductID}
        productName={productData["name"]}
        productPrice={productData["price"]}
        productSchool={schoolMapping(productData["school_id"])}
        productType={typeMapping(productData["type_id"])}
        productDescription={productData["desc"]}
        productDate={productData["create_date"]}
        productClickCount={productData["click_count"]}
        productCoverImage={productData["main_img"]}
      />
      <Footer />
    </div>
  );
}

// res_code: INT
// res_msg: STR
// collection: {
//     id: INT
//     name: STR
//     desc: STR
//     school_id: INT
//     type_id: INT
//     cover_img: STR
//     idx: INT
//     create_date: STR (datetime)
//     last_update: STR (datetime)
//     is_active: BOOL
//     click_count: INT
// }

function RotatingImageModal(props) {
  const id = props.id;
  //pass data from product using props...
  return (
    <Modal
      {...props}
      style={{ opacity: 1 }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          360 Degree View
        </Modal.Title>
      </Modal.Header>
      <Modal.Body align="center">
        <Card
          style={{ width: "60%", height: "100%" }}
          cover={
            <Rotation
              autoPlay={false}
              cycle={true}
              scroll={false}
              className="rotating-image"
            >
              {mugcup_2.map(renderImages)}
            </Rotation>
          }
        >
          {" "}
          <Meta
            title={"Product ID is " + id}
            description="Drag around the see different angles"
          />
        </Card>
      </Modal.Body>
    </Modal>
  );
}
export default ProductDetailPage;
