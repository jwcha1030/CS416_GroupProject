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
import {
  mugcup_1,
  mugcup_2,
  sample,
} from "./pages/Collections/DataRotatingImages";
const { Meta } = Card;



function ProductDetailPage(props) {
  const [modalShow, setModalShow] = React.useState(false);

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
        style={{ display: "flex", justifyContent: "center", margin: "100px" }}
      >
        DETAILED PAGE OF THE PRODUCT ID: {productId}
      </h1>

      <Button variant="dark" onClick={() => setModalShow(true)}>
        Launch 360 Degree View
      </Button>

      <RotatingImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="row" align="center">
      <div className="col-sm-1">
        </div>
        <div className="col-sm-5">
          <ImageGallery items={images} />
        </div>
          <div className="col-sm-1">
         </div>
          <div className="col-sm-4">
            <Card title="Title of Product">
              <div className="row">
                <div className="col">
                  <Card
                    style={{ width: "100%" }}
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
                    <Meta
                      title="$99.99 "
                      description="Drag around the see different angles"
                    />
                  </Card>
                </div>
                <div className="col">
                  <Card
                    extra={<a href="#">Want to buy? Contact us.</a>}
                    style={{ width: 300 }}
                  >
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                    <p>Product Details</p>
                  </Card>
                </div>
              </div>
            </Card>
            <div className="col-sm-1">
        </div>
          </div>
      
      </div>
      <Footer />
    </div>
  );
}

function RotatingImageModal(props) {
  
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
        ></Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ProductDetailPage;
