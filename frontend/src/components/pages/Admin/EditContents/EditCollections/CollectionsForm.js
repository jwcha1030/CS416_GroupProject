import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";
import {Col} from "react-bootstrap";

export default function CollectionsForm(prop) {
  const isEditForm = prop.currentItem !== undefined; //true if this form is called when edit button is pressed.

  const titleForm = isEditForm ?
    <Form.Control onChange={prop.handleTitle} placeholder={prop.currentItem.title}/> :
    <Form.Control onChange={prop.handleTitle} placeholder='Enter Title' required/>;
  const priceForm = isEditForm ?
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder={prop.currentItem.price}/> :
    <Form.Control type="number" step="0.01" onChange={prop.handlePrice} placeholder='Enter Price' required/>;
  const dateForm = isEditForm ?
    <Form.Control type="date" onChange={prop.handleDate} placeholder={prop.currentItem.date}/> :
    <Form.Control type="date" onChange={prop.handleDate} placeholder='Enter Date'/>;
  const schoolForm = isEditForm ?
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
    </Form.Control>;
  const typeForm = isEditForm ?
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
    </Form.Control>;

  const newLabelForm = isEditForm ?
    (prop.currentItem.new !== "" ?
      <input name="isNew" type="checkbox" onChange={prop.handleNewLabel} defaultChecked='true'/> :
      <input name="isNew" type="checkbox" onChange={prop.handleNewLabel}/>) :
    <input name="isNew" type="checkbox" onChange={prop.handleNewLabel}/>;
  const descForm = isEditForm ?
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder={prop.currentItem.description}/> :
    <Form.Control type="textarea" onChange={prop.handleDesc} placeholder='Enter Details' required/>;

  return (
    <div style={{margin: "auto"}} className="editContent__collections-form-container">
      <Form validated onSubmit={prop.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={"4"} controlId="formTitle">
            <Form.Label>Title</Form.Label>
            {titleForm}
          </Form.Group>
          <Form.Group as={Col} md={"4"} controlId="formSchool">
            <Form.Label>School</Form.Label>
            {schoolForm}
          </Form.Group>
          <Form.Group as={Col} md={2} controlId="formType">
            <Form.Label>Type</Form.Label>
            {typeForm}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={"4"} controlId="formPrice">
            <Form.Label>Price</Form.Label>
            {priceForm}
          </Form.Group>
          <Form.Group as={Col} md={"4"} controlId="formDate">
            <Form.Label>Date Added</Form.Label>
            {dateForm}
          </Form.Group>
          <Form.Group as={Col} md={"2"} controlId="formNewLabel">
            <Form.Label>Is New?</Form.Label>
            <div className="isNew_checkbox-container"> {/*mandatory container for layout*/}
              {newLabelForm}
            </div>
          </Form.Group>
        </Form.Row>
        <Form.Row rows={4}>
          <Form.Group as={Col} md={8} controlId="formDesc">
            <Form.Label>Description</Form.Label>
            {descForm}
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formFileUpload">
          <Form.File onChange={prop.handleImg} label="Product Image (e.g., .png/jpeg/jpg files)"/>
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