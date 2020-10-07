import React from 'react';
import Form from "react-bootstrap/Form";

export default function CarouselForm(prop) {
  return (
    <div className="editContent__form-container">
      <Form>
        <Form.Group controlId="formCaption">
          <Form.Label>Banner Caption</Form.Label>
          <Form.Control onChange={prop.handleCaption} placeholder="Enter caption"/>
        </Form.Group>
        <Form.Group controlId="formDetails">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={prop.handleDesc} as="textarea" placeholder="Enter description" />
        </Form.Group>
        <Form.Group controlId="formCaption">
          <Form.File onChange={prop.handleImg} label="Banner Image (e.g., .png/jpeg/jpg files)"/>
        </Form.Group>
      </Form>
    </div>
  );
}