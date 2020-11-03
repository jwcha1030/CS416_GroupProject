import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import { Formik } from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup'

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  type: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
  });

function ProductInquiry(props) {
 
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ opacity: 1 }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Product Inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <br></br>

          <Row>
            <Col>
            <h4>
            Fill out the inquiry form below about the Product ID: {props.dataToModal}
          </h4>
            </Col>
          </Row>
          <Formik
      validationSchema={schema}
      onSubmit={console.log(schema)}
      initialValues={{
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
               
                <Form.Control
                  type="email"
                  placeholder="msc.sunykr@gmail.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  size="lg"
                />             
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Col} md="4" controlId="validationFormikLastName">
              <Form.Label>First Name</Form.Label>
               
                <Form.Control
                  type="text"
                   name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                  size="lg"
                />             
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormikLastName">
              <Form.Label>Last Name</Form.Label>
               
                <Form.Control
                  type="text"
                   name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  size="lg"
                />             
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
            </Form.Group>


          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationFormikType">
          <Form.Label>Inquiry Type</Form.Label>
              <Form.Control
                as="select"
                value={values.type}
                onChange={handleChange}
                size="lg"
                > 
                  <option>Purchase</option>
                  <option>General</option>
                 </Form.Control>
             
            </Form.Group>


            <Form.Group as={Col} md="8" controlId="validationFormikMessage">
              <Form.Label>Message</Form.Label>
             
              <Form.Control
                placeholder="Your Message"
                name="message"
               value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
                 size="lg" as="textarea" rows="10" />

              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Form.Row>
       
          <div align="right">
          <Button variant="light" onClick={props.onHide}>
            Close
          </Button>
          <Button type="submit" variant="dark">Submit</Button>
          </div>
        </Form>
      )}
    </Formik>
        </Modal.Body>
      </Modal>
    );
  }
  
  export default ProductInquiry