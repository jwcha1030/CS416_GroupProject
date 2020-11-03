import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "./pages/Footer.js/Footer";
import ImageGallery from "react-image-gallery";
import "./ProductDetailPage.css";
import { Card } from "antd";
import renderImages from "./RotatingImage";
import Rotation from "react-rotation";
import "./RotatingImage.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PurchaseInquiryModal from "./PurchaseInquiry"

import {
  mugcup_1,
  mugcup_2,
  sample,
} from "./pages/Collections/DataRotatingImages";
const { Meta } = Card;


function ProductDetailPage(props) {
  const [PurchaseInquiryModalShow, setPurchaseInquiryModalShow] = React.useState(false);
  const [RotatingImageModalShow, setRotatingImageModalShow] = React.useState(false); 

  const productId = props.match.params.id;

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className="details-container">
      <h1
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        DETAILED PAGE OF THE PRODUCT ID: {productId}
      </h1>

     

      <RotatingImageModal
        //pass data to  modal using props...

        id={productId}
        show={RotatingImageModalShow}
        onHide={() => setRotatingImageModalShow(false)}
        

      />


      <div className="row" align="center">
      <div className="col-sm-1">
        </div>
        <div className="col-sm-5">
          <ImageGallery items={images} />
          <div className="rotating-images-modal">
          <Button variant="dark" size="lg" onClick={() => setRotatingImageModalShow(true)}>
            Launch 360 Degree View
          </Button>
      </div>
        </div>
        
          <div className="col-sm-1">
         </div>
          <div className="col-sm-4">
            <Card title="Title of Product"  extra={ 
                    <Button
                      className="make-inquiry"
                      variant="dark"
                      buttonStyle="btn--outline"
                      onClick={() => setPurchaseInquiryModalShow(true)}
                    >
                      Purchase Inquiry
                    </Button>}>
              <div className="row">
                <div className="col-sm-8">
               Product Information
                </div>
                <div className="col-sm-4">
                   <Card
                    style={{ width: "50%" }}
                  >
                    <p>Price:</p>
                    <p>School:</p>
                    <p>Type:</p>
                    <p>Size:</p>
                    <p>Color:</p>
                    <p>View Count:</p>
              
                  </Card>
                </div>
              </div>
            </Card>
            <div className="col-sm-1">
        </div>
          </div>
      
      </div>
      <PurchaseInquiryModal
        show={PurchaseInquiryModalShow}
        onHide={() => setPurchaseInquiryModalShow(false)}
        dataToModal={productId}

      />
      <Footer />
    </div>
  );
}

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
                    style={{ width: "60%", height:"100%" }}
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
                 
        >   <Meta
                    title={"Product ID is "+ id}
                    description="Drag around the see different angles"
                  /></Card>
 
      </Modal.Body>
   
    </Modal>
  );
}
export default ProductDetailPage;
