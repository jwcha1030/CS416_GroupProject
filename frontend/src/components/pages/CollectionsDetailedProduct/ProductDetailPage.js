import React, { useState, useEffect } from "react";
import Axios from "axios";
import Footer from "../../footer/Footer";
import ImageGallery from "react-image-gallery";
import "./ProductDetailPage.css";
import { Card } from "antd";
import renderImages from "../../collections/RotatingImage";
import Rotation from "react-rotation";
import "../../collections/RotatingImage.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PurchaseInquiryModal from "../../inquiry/PurchaseInquiry"
 
import {
  mugcup_1,
  mugcup_2,
  sample,
} from "../Collections/DataRotatingImages";
const { Meta } = Card;


function ProductDetailPage(props) {
  const [PurchaseInquiryModalShow, setPurchaseInquiryModalShow] = React.useState(false);
  const [RotatingImageModalShow, setRotatingImageModalShow] = React.useState(false); 

  const productId = props.match.params.id;

  const images = [
    {
      original: "https://kickslinks.com/wp-content/uploads/2016/11/nike-air-presto-flyknit-ultra-crimson-4.jpg",
      thumbnail: "https://kickslinks.com/wp-content/uploads/2016/11/nike-air-presto-flyknit-ultra-crimson-4.jpg",
    },
    {
      original: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREPatJE3wakbtxXBlJlfTVupaH_zJ13Ek0SQ&usqp=CAU",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREPatJE3wakbtxXBlJlfTVupaH_zJ13Ek0SQ&usqp=CAU",
    },
    {
      original: "https://swankism.com/wp-content/uploads/2016/04/nike-air-presto-ultra-flyknit-official-images-03.jpg?x95412",
      thumbnail: "https://swankism.com/wp-content/uploads/2016/04/nike-air-presto-ultra-flyknit-official-images-03.jpg?x95412",
    },
  ];
  useEffect(() => {}, []);

  return (
    <div className="details-container">
      <h1
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        Detailed Product ID: {productId}
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
                <div className="col-sm-5 text-left">
                    <h1> $19.99 </h1>
                    <p> Fashion Institute of Technology </p>
                    <p> Apparels </p>
                    <p> 13 Views</p>
                </div>
                <div className="col-sm-7 text-left">
                <Card >
                    <p>This product is handcrafted by MSC members in 2018 Spring. It took over a year to craft the product, and we are now 
                    finally offering it to everyone. Please take a close look at ... </p>
                   
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
