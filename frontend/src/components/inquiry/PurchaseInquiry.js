import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import InputGroup from "react-bootstrap/InputGroup";
import SampleImage from "../../images/s1.jpg";

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Last name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup
    .string()
    .min(10, "Please provide more details (10-300 characters)")
    .max(300, "Too Long!")
    .required("Last name is required"),
  type: yup.string().required(),
});

function PurchaseInquiry(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ opacity: 1 }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Purchase Inquiry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <br></br>

        <h4>
          Fill out the inquiry form below about the Product ID:{" "}
          {props.dataToModal}
        </h4>
        <br></br>

        <Formik
          validationSchema={schema}
          onSubmit={console.log(schema)}
          initialValues={{}}
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
                <Form.Group as={Col} md="6" controlId="validationFormikProduct">
                  <Form.Label>Product Information</Form.Label>
                  <br />
                  <Form.Text style={{ fontSize: "15px" }}>
                    Product ID is {props.dataToModal}
                  </Form.Text>{" "}
                  <br />
                  <Form.Text style={{ fontSize: "15px" }}>
                    Product Name is ... {props.dataToModal}
                  </Form.Text>{" "}
                  <br />
                  <Form.Text style={{ fontSize: "15px" }}>
                    Product Price is ... {props.dataToModal}
                  </Form.Text>{" "}
                  <br />
                  <Form.Text style={{ fontSize: "15px" }}>
                    Product Image <img src={SampleImage} />
                  </Form.Text>{" "}
                  <br />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="1"
                  controlId="validationFormikLastName"
                ></Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikLastName"
                >
                  <Form.Row>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Row>
                  <br />
                  <Form.Row>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Row>

                  <br />
                  <Form.Row>
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Row>
                  <br />
                  <br />
                  <Form.Row>
                    <Form.Label>Purchase Methods</Form.Label>
                    <Form.Control
                      as="select"
                      value={values.type}
                      onChange={handleChange}
                      size="lg"
                    >
                      <option>Cash</option>
                      <option>Wire Bank Account</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Form.Row>

              <br />
              <Form.Row>
                {/* <Form.Group as={Col} md="4" controlId="validationFormikType">
       
                </Form.Group> */}

                <Form.Group
                  as={Col}
                  md="11"
                  size="lg"
                  controlId="validationFormikNotes"
                >
                  <Form.Label size="lg">Note</Form.Label>
                  <Form.Text style={{ fontSize: "15px" }}>
                    In the message below, please include your preferred option
                    (size / color / quantity) of the product, and we will
                    proceed your purchase after contacting you through your
                    email again shortly.{" "}
                  </Form.Text>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  md="11"
                  controlId="validationFormikMessage"
                >
                  <Form.Label>Message</Form.Label>

                  <Form.Control
                    placeholder="Your detailed purchasing inquiry on color, size, quantity, and anything else ."
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    size="lg"
                    as="textarea"
                    rows="10"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <br />
              <br />
              <div align="right">
                <Button variant="light" size="lg" onClick={props.onHide}>
                  Close
                </Button>
                <Button type="submit" size="lg" variant="dark">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default PurchaseInquiry;
