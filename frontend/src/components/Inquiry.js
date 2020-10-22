import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function InquiryModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ opacity: 1 }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Questions?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Please feel free to ask anything by filling out the form below, and we
            will get back to you within a few days.
          </h4>
  
          <Form>
            <br></br>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>
  
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
  
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Inquiry</Form.Label>
              <Form.Control as="textarea" rows="10" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="dark">Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default InquiryModal