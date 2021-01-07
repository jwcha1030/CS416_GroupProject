import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import {Col} from "react-bootstrap";
import {galImage1, galImage2, galImage3, galImage4, galImage5, galImage6, mainImage} from "./CollectionsEdit";
import MultiImageInput from "react-multiple-image-input";

export default function CollectionsForm(prop) {
  const isEditForm = prop.currentItem !== undefined; //true if this form is called when edit button is pressed.
  //collection id: 0 -> None, 1-> Goods, 2-> Apparel
  const collectionIdForm = isEditForm ?
    <Form.Control type="number" onChange={prop.handleCollectionId} placeholder={prop.currentItem.collection_id} min={1}
                  max={2}/> :
    <Form.Control type="number" onChange={prop.handleCollectionId} placeholder='Enter Collection ID' required min={1}
                  max={2}/>;
  const nameForm = isEditForm ?
    <Form.Control onChange={prop.handleName} placeholder={prop.currentItem.name}/> :
    <Form.Control onChange={prop.handleName} placeholder="Enter Name of the Product" required/>;

  const priceForm = isEditForm ?
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder={prop.currentItem.price}/> :
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder='Enter Price' required/>;

  const descForm = isEditForm ?
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder={prop.currentItem.desc}/> :
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder='Enter Details about the Product' required/>;
  //mainImg is required when creating
  const mainImgForm = isEditForm ?
    <Form.File onChange={prop.handleMainImg} accept=".jpg, .jpeg., .png"
               label="Product Main Img (e.g., .png/jpeg/jpg files)"/> :
    <Form.File onChange={prop.handleMainImg} accept=".jpg, .jpeg., .png"
               label="Product Main Img (e.g., .png/jpeg/jpg files)" required/>;
  //galImg1 is required when creating
  const galImg1Form = isEditForm ?
    <Form.File onChange={prop.handleGalImg1} accept=".jpg, .jpeg., .png"
               label="Gallery Img1 (e.g., .png/jpeg/jpg files)"/> :
    <Form.File onChange={prop.handleGalImg1} accept=".jpg, .jpeg., .png"
               label="Gallery Img1 (e.g., .png/jpeg/jpg files)" required/>;

  /*const schoolForm = isEditForm ?
    (prop.currentItem.school === "SBU" ?
      <Form.Control as="select" onChange={prop.handleSchool}>
        <option>FIT</option>
        <option selected="selected">SBU</option>
      </Form.Control> :
      <Form.Control as="select" onChange={prop.handleSchool}>
        <option selected="selected">FIT</option>
        <option>SBU</option>
      </Form.Control>) :
    //when creating (default=FIT)
    <Form.Control as="select" onChange={prop.handleSchool}>
      <option selected="selected">FIT</option>
      <option>SBU</option>
    </Form.Control>;*/
  /*const typeForm = isEditForm ?
    (prop.currentItem.type === "Apparel" ?
      <Form.Control as="select" onChange={prop.handleType}>
        <option selected="selected">Apparel</option>
        <option>Goods</option>
      </Form.Control> :
      <Form.Control as="select" onChange={prop.handleType}>
        <option>Apparel</option>
        <option selected="selected">Goods</option>
      </Form.Control>) :
    //when creating (default=FIT)
    <Form.Control as="select" onChange={prop.handleType}>
      <option selected="selected">Apparel</option>
      <option>Goods</option>
    </Form.Control>;*/


  return (
    <div style={{margin: "auto"}} className="editContent__collections-form-container">
      <Form validated onSubmit={prop.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={"4"}>
            <Form.Label>Product Name</Form.Label>
            {nameForm}
          </Form.Group>
          <Form.Group as={Col} md={"4"}>
            <Form.Label>Price</Form.Label>
            {priceForm}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={"4"}>
            <Form.Label>Collection ID</Form.Label>
            <Form.Label>(1:Goods 2:Apparel)</Form.Label>
            {collectionIdForm}
          </Form.Group>
          {isEditForm && <Form.Group as={Col} md={"2"}>
            <Form.Label>In Stock?</Form.Label>
            <div className="isActive_checkbox-container"> {/*mandatory container for layout*/}
              <Form.Check type={"checkbox"} onChange={prop.handleActive} defaultChecked={prop.currentItem.is_active}/>
            </div>
          </Form.Group>}
        </Form.Row>
        <Form.Row rows={4}>
          <Form.Group as={Col} md={8}>
            <Form.Label>Description of the Product</Form.Label>
            {descForm}
          </Form.Group>
        </Form.Row>
        <Form.Group>
          {mainImgForm}
          {prop.currentItem && !mainImage && <img src={prop.currentItem.main_img}/>}
          {mainImage && <img src={mainImage}/>}
        </Form.Group>
        <Form.Group>
          {galImg1Form}
          {/*prop.currentItem is to check whether the modal is an edit modal*/}
          {prop.currentItem && !galImage1 && <img src={prop.galImg1} style={{height: 250, width: 200}}/>}
          {/*if galImage1 (global variable) is NOT null, display updated img*/}
          {galImage1 && <img src={galImage1} style={{height: 250, width: 200}}/>}
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg2} accept=".jpg, .jpeg., .png"
                     label="Gallery Img2 (e.g., .png/jpeg/jpg files)"/>
          {prop.currentItem && !galImage2 && <img src={prop.galImg2} style={{height: 250, width: 200}}/>}
          {galImage2 && <img src={galImage2} style={{height: 250, width: 200}}/>}
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg3} accept=".jpg, .jpeg., .png"
                     label="Gallery Img3 (e.g., .png/jpeg/jpg files)"/>
          {prop.currentItem && !galImage3 && <img src={prop.galImg3} style={{height: 250, width: 200}}/>}
          {galImage3 && <img src={galImage3} style={{height: 250, width: 200}}/>}
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg4} accept=".jpg, .jpeg., .png"
                     label="Gallery Img4 (e.g., .png/jpeg/jpg files)"/>
          {prop.currentItem && !galImage4 && <img src={prop.galImg4} style={{height: 250, width: 200}}/>}
          {galImage4 && <img src={galImage4} style={{height: 250, width: 200}}/>}
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg5} accept=".jpg, .jpeg., .png"
                     label="Gallery Img5 (e.g., .png/jpeg/jpg files)"/>
          {prop.currentItem && !galImage5 && <img src={prop.galImg5} style={{height: 250, width: 200}}/>}
          {galImage5 && <img src={galImage5} style={{height: 250, width: 200}}/>}
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg6} accept=".jpg, .jpeg., .png"
                     label="Gallery Img6 (e.g., .png/jpeg/jpg files)"/>
          {prop.currentItem && !galImage6 && <img src={prop.galImg6} style={{height: 250, width: 200}}/>}
          {galImage6 && <img src={galImage6} style={{height: 250, width: 200}}/>}
        </Form.Group>
        {/*{prop.currentItem && <Form.Group>
            <Form.Label>Gallery Images (Max 6 images) </Form.Label>
            <MultiImageInput setImages={prop.setImages} images={prop.images} max={6}/>
            </Form.Group>}*/}
        <Modal.Footer>
          <Button onClick={prop.handleClose} buttonColor="msc_orange_invert"
                  buttonSize="btn--medium">Close</Button>
          <Button type="submit" buttonColor="msc_orange" buttonSize="btn--medium">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
};