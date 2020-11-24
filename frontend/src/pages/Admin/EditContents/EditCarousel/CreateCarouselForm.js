import React from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";

export default function CarouselForm(prop) {
  const isEditForm = prop.currentItem !== undefined; //true if this form is called when edit button is pressed.

  const captionForm = isEditForm ?
    <Form.Control onChange={prop.handleCaption} placeholder={prop.currentItem.caption}/> :
    <Form.Control onChange={prop.handleCaption} placeholder='Enter Caption' required/>;

  const descForm = isEditForm ?
    <Form.Control onChange={prop.handleDesc} as="textarea" placeholder={prop.currentItem.desc}/> :
    <Form.Control onChange={prop.handleDesc} placeholder='Enter Details' required/>;


  return (
    <div className="editContent__carousel-form-container">
      <Form validated onSubmit={prop.handleSubmit}>
        <Form.Group controlId="formCaption">
          <Form.Label>Banner Caption</Form.Label>
          {captionForm}
        </Form.Group>
        {isEditForm &&
          <Form.Group controlId="formIdx">
            <Form.Label>
              Order of the Item
            </Form.Label>
            <Form.Control onChange={prop.handleIdx} type="number" placeholder={prop.currentItem.idx}/>
          </Form.Group>
        }

      <Form.Group controlId="formDetails">
        <Form.Label>Description</Form.Label>
        {descForm}
      </Form.Group>
      <Form.Group controlId="formFileUpload">
        <Form.File onChange={prop.handleImg} accept=".jpg, .jpeg., .png"
                   label="Banner Image (e.g., .png/jpeg/jpg files) [Optimal Img Size: 2700 x 900 pixels]"/>
      </Form.Group>
      <Modal.Footer>
        <Button onClick={prop.handleClose} buttonColor="msc_orange_invert" buttonSize="btn--medium">Close</Button>
        <Button type="submit" buttonColor="msc_orange" buttonSize="btn--medium">
          Submit
        </Button>
      </Modal.Footer>
    </Form>
    </div>
  );
}