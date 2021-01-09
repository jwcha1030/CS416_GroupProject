import React, { useState, useEffect, useLayoutEffect } from "react";
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
// import Moment from "react-moment"; //moment library
import { MdRemoveRedEye } from "react-icons/md";
import NumberFormat from "react-number-format";
import SBU_IMG from "../../images/sbu3.png";
import FIT_IMG from "../../images/fit3.png";
import { mugcup_1, mugcup_2, sample } from "../Collections/DataRotatingImages";
import LOADER_GIF from "../../images/loading.gif";

const { Meta } = Card;

const axios = require("axios");

const NONE_STRING = "None";
const ERROR_STRING = "Error";
const LOADING_STRING = "Loading...";

const FIT_STRING = "FIT";
const SBU_STRING = "SBU";
const GOODS_STRING = "Goods";
const APPARELS_STRING = "Apparels";

const schoolMapping = (school_id) => {
  if (school_id === 0) {
    return NONE_STRING;
  } else if (school_id === 1) {
    return SBU_IMG; //school logo img
  } else if (school_id === 2) {
    return FIT_IMG; //school logo img
  } else {
    return ERROR_STRING;
  }
};
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

let has360View;
let cProductID
function ProductDetailPage(props) {
  const [loading, setLoading] = useState(false);

  cProductID = props.match.params.id; // the id of this product  11.25.2020 has only 2 in the backend data

  const [productData, setData] = useState({});
  const [hasCatalogDisplayID, setHasCatalogDisplayID] = useState();
  const [hasCatalogDisplayBoolean, setHasCatalogDisplayBoolean] = useState();

  let apiBaseUrl =
    "https://sunyk-msc-backend.herokuapp.com/collection/item/get/" +
    cProductID +
    "/";

  let apiHas360ViewUrl =
    "https://sunyk-msc-backend.herokuapp.com/collection/item/" +
    cProductID +
    "/catalog_display/has/";

  let api360ViewImagesUrl =
    "https://sunyk-msc-backend.herokuapp.com/catalog_display/" +
    hasCatalogDisplayID +
    "/images/get_all/";

  // product details api call
  useEffect(() => {
    setLoading(true);
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
            setLoading(false);
          } else {
            console.log(
              "unhandled res_code error from get collection. Please contact an admin."
            );
          }
        } else {
          console.log(
            "unhandled response status get collection. Please contact an admin."
          );
        }
      })
      .catch(function (error) {
        console.log("code 0 " + error);

        console.log(
          "unhandled error from get collection. Please contact an admin."
        );
      });
  }, []);

  // calling api calls - whether the product has 360 degree view or not, No 360 means ID = -1 , otherwise ID exists.
  useEffect(() => {
    setLoading(true);

    axios
      .get(apiHas360ViewUrl)
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            console.log(
              "Successfully fetched whether the product has catalog display or not: product id:" +
              cProductID,
              response.data.res_msg
            );
            setHasCatalogDisplayID(response.data.cd_id);
            setHasCatalogDisplayBoolean(response.data.has);
            has360View = response.data.has;

            setLoading(false);
          } else {
            console.log(
              "unhandled res_code error from catalog display. Please contact an admin."
            );
          }
        } else {
          console.log(
            "unhandled response status  catalog display. Please contact an admin."
          );
        }
      })
      .catch(function (error) {
        console.log("code 0 " + error);

        console.log(
          "unhandled error from catalog display. Please contact an admin."
        );
      });
  }, []);



  const [
    PurchaseInquiryModalShow,
    setPurchaseInquiryModalShow,
  ] = React.useState(false);
  const [RotatingImageModalShow, setRotatingImageModalShow] = React.useState(
    false
  );

  //GALLERY IMAGE-------------------------------------------------------------
  //gallery images - check how many gallery images there are. From gallery_img1 to gallery_img6 [from backend]
  let galleryImageNamesList = [];
  let galleryImagesData = [{}];
  const GALLERY_IMAGE_SIZE = 6;

  //start with main image as the 0th index.
  galleryImagesData[0] = {
    original: productData["main_img"],
    thumbnail: productData["main_img"],
  };

  //add the gallery images to the galleryData.
  //backend data: gallery_img1, gallery_img2,...gallery_img6
  for (let x = 0; x < GALLERY_IMAGE_SIZE; x++) {
    galleryImageNamesList.push("gallery_img" + (x + 1));
    if (productData[galleryImageNamesList[x]] != "") {
      galleryImagesData.push({
        original: productData[galleryImageNamesList[x]],
        thumbnail: productData[galleryImageNamesList[x]],
      });
    }
  }
  if (loading) {
    return (
      <p
        style={{
          marginTop: "10rem",
        }}
        align="center"
      >
        <img style={{ width: "500px" }} src={LOADER_GIF} />
      </p>
    );
  } else {
    return (
      <div className="details-container">
        <h1 style={{ display: "flex", justifyContent: "center", margin: "4%" }}>
          {" "}
        </h1>

        <RotatingImageModal
          //pass data to  modal using props...
          id={cProductID}
          show={RotatingImageModalShow}
          onHide={() => setRotatingImageModalShow(false)}
          productName={productData["name"]}
        />

        <div className="row" align="center">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <ImageGallery lazyLoad={true} items={galleryImagesData} />
            <div className="rotating-images-modal">
              {/*TEMPORARILY SET ALL PRODUCTS TO FIXED MOCKUP 360 VIEW. MSC HAS NOT PREPARED THE DATA YET. */}
              {/* <Button
                variant="dark"
                size="lg"
                onClick={() => setRotatingImageModalShow(true)}
              >
                Launch 360 Degree View
              </Button> */}
              {/* BELOW IS THE DYNAMIC CHECKING OF WHETHER THE ITEM HAS 360 VIEW OR NOT. IT RENDERS A BUTTON OR A "NOT AVAILABLE TEXT" ACCORDINGLY. */}
              {hasCatalogDisplayBoolean ? ( //button for 360 degree view if it is available.
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() => setRotatingImageModalShow(true)}
                >
                  Launch 360 Degree View
                </Button>
              ) : (
                  <p style={{ color: "#aaaaaa" }}>
                    360 Degree View Not Available
                  </p> //else a text
                )}
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
              {" "}
              <br />
              <div className="row" id="mobileRow">
                <div className="col-sm-1" id="space"></div>
                <div className="col-sm-4 text-left" id="product-side-details">
                  <div className="product-price">
                    <span className="detailed-page-won">₩ </span>
                    <NumberFormat
                      className="detailed-page-price"
                      value={productData["price"]}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </div>
                  <br />
                  <br />

                  <div className="product-school">
                    <img
                      className="product-school-img"
                      src={schoolMapping(productData["school_id"])}
                    />
                    {schoolMappingStr(productData["school_id"])}
                  </div>
                  <br></br>
                  <div className="product-type">
                    <br></br>
                    {typeMapping(productData["type_id"])}
                  </div>

                  <br />
                  <br />

                  <div className="product-click-count">
                    <MdRemoveRedEye style={{ paddingRight: "2px" }} />{" "}
                    {productData["click_count"]}
                  </div>
                  <br />
                </div>
                <div className="col-sm-1" id="space">
                  {" "}
                </div>

                <div
                  className="col-sm-6 text-left"
                  id="product-description-container"
                >
                  <div className="product-description">
                    {productData["desc"]}
                  </div>
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
          productSchoolStr={schoolMappingStr(productData["school_id"])}
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
}

function RotatingImageModal(props) {
  const [catalogDisplayImages, setCatalogDisplayImages] = useState([{}]);
  const [loading360, setLoading360] = useState(false);
  const [hasCatalogDisplayID, setHasCatalogDisplayID] = useState();


  let apiHas360ViewUrl =
    "https://sunyk-msc-backend.herokuapp.com/collection/item/" +
    cProductID +
    "/catalog_display/has/";

  let api360ViewImagesUrl =
    "https://sunyk-msc-backend.herokuapp.com/catalog_display/" +
    hasCatalogDisplayID +
    "/images/get_all/";



  // NOTE: This is a nested axios call because it needs to re initialize the url...
  useEffect(() => {
    axios
      .get(apiHas360ViewUrl)
      .then(function (response1) {
        if (response1.status == 200) {
          if (response1.data.res_code == 1) {
            api360ViewImagesUrl =
              "https://sunyk-msc-backend.herokuapp.com/catalog_display/" +
              response1.data.cd_id +
              "/images/get_all/";
            setLoading360(true);
            console.log(api360ViewImagesUrl)
            axios
              .get(api360ViewImagesUrl)
              .then(function (response) {
                if (response.status == 200) {
                  if (response.data.res_code == 1) {
                    console.log("START IMAGE DATA")

                    setCatalogDisplayImages(response.data.results)
                    setLoading360(false);
                  } else {
                    console.log(
                      "rescode other than 1. Catalog Display may not be available, or it has some other error."
                    );
                  }
                } else {
                  console.log(
                    "unhandled response status from loading catalog display images. Please contact an admin."
                  );
                }
              })
              .catch(function (error) {
                console.log("code 0 " + error);
                console.log(
                  "unhandled error from loading catalog display images. Please contact an admin."
                );
              });
          } else {
            console.log(
              "unhandled res_code error from catalog display. Please contact an admin."
            );
          }
        } else {
          console.log(
            "unhandled response status  catalog display. Please contact an admin."
          );
        }
      })
      .catch(function (error) {

        console.log(
          "unhandled error from catalog display. Please contact an admin."
        );
      });
  }, []);


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
              {/*    TEMPORARY MOCKUP DATA */}
              {/* {mugcup_1.map(renderImages)} */}

              {/*  BACKEND DATA API CALL -- MSC IS NOT READY TO PROVIDE THE DATA YET -12/3/2020 **********************************/}
              {/* enabled --12/20/2020 */}

              {loading360 ? ( //button for 360 degree view if it is available.
                <img src={LOADER_GIF} />

              ) : (
                  catalogDisplayImages.map(renderImages)
                )}

            </Rotation>
          }
        >
          <Meta
            title={props.productName}
            description="Drag around the see different angles"
          />
        </Card>
      </Modal.Body>
    </Modal>
  );
}
export default ProductDetailPage;
