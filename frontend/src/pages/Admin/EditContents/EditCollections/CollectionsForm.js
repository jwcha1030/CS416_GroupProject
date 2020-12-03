import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import {Col} from "react-bootstrap";
import {galImage1, galImage2, galImage3, galImage4, galImage5, galImage6, mainImage} from "./CollectionsEdit";

export default function CollectionsForm(prop) {
  const isEditForm = prop.currentItem !== undefined; //true if this form is called when edit button is pressed.

  const collectionIdForm = isEditForm ?
    <Form.Control type="number" onChange={prop.handleCollectionId} placeholder={prop.currentItem.collection_id}/> :
    <Form.Control type="number" onChange={prop.handleCollectionId} placeholder='Enter Collection ID' required/>;
  const nameForm = isEditForm ?
    <Form.Control onChange={prop.handleName} placeholder={prop.currentItem.name} />:
    <Form.Control onChange={prop.handleName} placeholder="Enter Name of the Product" required />;

  const priceForm = isEditForm ?
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder={prop.currentItem.price}/> :
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder='Enter Price' required/>;

  const descForm = isEditForm ?
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder={prop.currentItem.desc}/> :
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder='Enter Details about the Product' required/>;
  const mainImgForm = isEditForm ?
    <Form.File onChange={prop.handleMainImg}  accept=".jpg, .jpeg., .png" label="Product Main Img (e.g., .png/jpeg/jpg files)"/>:
    <Form.File onChange={prop.handleMainImg}  accept=".jpg, .jpeg., .png" label="Product Main Img (e.g., .png/jpeg/jpg files)" required/>
  const isActiveForm = isEditForm ?
    //when editing
      (
        prop.currentItem.is_active ?
        <input name="isActive" type="checkbox" onChange={prop.handleActive} defaultChecked='true'/> :
        <input name="isActive" type="checkbox" onChange={prop.handleActive}/>
      ) :
    //when creating, this form is not necessary
    null;
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
          <Form.Group as={Col} md={"2"}>
            <Form.Label>Collection ID</Form.Label>
            {collectionIdForm}
          </Form.Group>
          {isEditForm && <Form.Group as={Col} md={"2"}>
            <Form.Label>In Stock?</Form.Label>
            <div className="isActive_checkbox-container"> {/*mandatory container for layout*/}
              {isActiveForm}
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
          <img src={mainImage}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg1}  accept=".jpg, .jpeg., .png" label="Gallery Img1 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage1}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg2}  accept=".jpg, .jpeg., .png" label="Gallery Img2 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage2}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg3}  accept=".jpg, .jpeg., .png" label="Gallery Img3 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage3}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg4}  accept=".jpg, .jpeg., .png" label="Gallery Img4 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage4}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg5}  accept=".jpg, .jpeg., .png" label="Gallery Img5 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage5}/>
        </Form.Group>
        <Form.Group>
          <Form.File onChange={prop.handleGalImg6}  accept=".jpg, .jpeg., .png" label="Gallery Img6 (e.g., .png/jpeg/jpg files)"/>
          <img src={galImage6}/>
        </Form.Group>
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
}