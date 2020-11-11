import React from 'react';
import Form from "react-bootstrap/Form";
import {Col} from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import {Button} from "../../../../button/Button";

//TODO: Finish this form
export default function OurTeamForm (props) {
  const isEditForm = props.currentItem !== undefined;

  //if this component is used for editing data, add current value as a placeholder.
  const nameForm = isEditForm ?
    <Form.Control onChange={props.handleName} placeholder={props.currentItem.name}/> :
    <Form.Control onChange={props.handleName} placeholder='Enter Name' required/>;
  const positionForm = isEditForm ?
    <Form.Control onChange={props.handlePosition} placeholder={props.currentItem.position}/>:
    <Form.Control onChange={props.handlePosition} placeholder="Enter the position of the member" required/>;
  const dateForm = isEditForm ?
    <Form.Control type="date" onChange={props.handleDate} placeholder={props.currentItem.date}/>:
    <Form.Control type="date" onChange={props.handleDate} placeholder='Enter Date'/>;
  const descriptionForm= isEditForm ?
    <Form.Control as='textarea' onChange={props.handleDesc} placeholder={props.currentItem.description}/>:
    <Form.Control as='textarea' onChange={props.handleDesc} placeholder="Enter any description of the member's role in MSC"/>;
  const contactForm = isEditForm ?
    <Form.Control onChange={props.handleContact} placeholder={props.currentItem.contact}/>:
    <Form.Control onChange={props.handleContact} placeholder='Enter contact info'/>;

  return (
    <div style={{margin:"auto"}} className="editContent__ourTeam-form-container">
      <Form validated onSubmit={props.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={"4"} controlId={"formName"}>
            <Form.Label>Name</Form.Label>
            {nameForm}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={"4"} controlId="formPosition">
            <Form.Label>Position</Form.Label>
            {positionForm}
          </Form.Group>
          <Form.Group as={Col} md={"4"} controlID="formDate">
            <Form.Label>Date Joined</Form.Label>
            {dateForm}
          </Form.Group>
        </Form.Row>
        <Form.Row rows={4}>
          <Form.Group as={Col} md={8} controlID="formDesc">
            <Form.Label>Description of the Member's Role</Form.Label>
            {descriptionForm}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={"4"} controlID="formContact">
            <Form.Label>Contact Info</Form.Label>
            {contactForm}
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formFileUpload">
          <Form.File onChange={props.handleImg} label="Profile Image of the Member (in .png/jpeg/jpg files)"/>
        </Form.Group>
        <Modal.Footer>
          <Button onClick={props.handleClose} buttonColor="msc_orange_invert" buttonSize="btn--medium">Close</Button>
          <Button type="submit" buttonColor="msc_orange" buttonSize="btn--medium">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
}
