import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";

import * as yup from "yup";

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
});

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
        <Modal.Title id="contained-modal-title-vcenter">
          General Inquiry
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <br></br>
        <h4>
          Please feel free to ask anything by filling out the form below, and we
          will get back to you within a few days.
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
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikLastName"
                >
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
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikLastName"
                >
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
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormikEmail">
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
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikMessage"
                >
                  <Form.Label>Message</Form.Label>

                  <Form.Control
                    placeholder="Your Message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    size="lg"
                    as="textarea"
                    rows="15"
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

export default InquiryModal;
