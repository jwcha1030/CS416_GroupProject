import React from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";

export default function CollectionsForm(prop) {
  const isEditForm = prop.currentItem !== undefined; //true if this form is called when edit button is pressed.

  const titleForm = isEditForm ? <Form.Control onChange={prop.handleTitle} placeholder={prop.currentItem.title}/> :
    <Form.Control onChange={prop.handleTitle} placeholder='Enter Title' required/>;
  const priceForm = isEditForm ? <Form.Control onChange={prop.handlePrice} placeholder={prop.currentItem.price}/> :
    <Form.Control onChange={prop.handlePrice} placeholder='Enter Price' required/>;
  const dateForm = isEditForm ?
    <Form.Control type="date" onChange={prop.handleDate} placeholder={prop.currentItem.date}/> :
    <Form.Control type="date" onChange={prop.handleDate} placeholder='Enter Date' required/>;


  return (
    <div className="editContent__collections-form-container">
      <Form onSubmit={prop.handleSubmit}>
        <Form.Row>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            {titleForm}
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            {priceForm}
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            {dateForm}
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formFileUpload">
          <Form.File onChange={prop.handleImg} label="Banner Image (e.g., .png/jpeg/jpg files)"/>
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