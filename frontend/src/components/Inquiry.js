import React from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <br></br>

          <Row>
            <Col>
            <h4>
            Please feel free to ask anything by filling out the form below, and we
            will get back to you within a few days.
          </h4>
  
            </Col>
          </Row>
        
          <Form>
            <br></br>
            <Row>
            <Col>
            <Form.Label>First Name</Form.Label>
              <Form.Control required size="lg" placeholder="First name" />
            </Col>
            <Col>
            <Form.Label>Last Name</Form.Label>
              <Form.Control  required size="lg" placeholder="Last name" />
            </Col>
          </Row>
          <br></br>

          <Row>
          <Col>
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control required size="lg" type="email" placeholder="Your Email" />
            </Form.Group>
        </Col>
          </Row>
        
        <Row>
        <Col>
        <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control required size="lg" as="textarea" rows="10" />
            </Form.Group>
        </Col>
        </Row>

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