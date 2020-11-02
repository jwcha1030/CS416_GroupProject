import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {DataMembers} from "../../../OurTeam/DataMembers";
import {IoIosArrowBack} from "react-icons/io";
import DataTable from "../DataTable";
import ProductDataAll from "../../../../ProductDataAll";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";
import OurTeamForm from "./OurTeamForm";

export default function OurTeamEdit(props) {
  const headers = Object.keys(DataMembers[0]);
  const [current_item, setItem] = useState(ProductDataAll[0]);
  const [data, setData] = useState(DataMembers);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [dateJoined, setDateJoined] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [contact, setContact] = useState('');

  const getCurrentDate = () => {
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm;
    return today
  };
  //inputs
  const handleName=(e)=>{
    setName(e.target.value);
  };
  const handlePosition=(e)=>{
    setPosition(e.target.value);
  };
  const handleDate=(e)=>{
    let dateVal=e.target.value;
    setDateJoined("Joined: "+dateVal.slice(0,-3));
  };
  const handleDesc=(e)=>{
    setDesc(e.target.value)
  };
  const handleImg =(e)=>{
    setImg(e.target.value)
  };
  const handleContact=(e)=>{
    setContact(e.target.value)
  };

  const handleDelete = (id) => {
    const removedItems = [...data].filter(item => item.id !== id);
    setData(removedItems);
  };

  //edit modal handler
  const changeItem = (id) => {
    const currentItem = (data.filter(item => item.id === id))[0]; //selects the item that is clicked
    setItem(currentItem);
  };
  const handleEditShow = () => {
    setEditModalShow(true);
  };
  const handleEditClose = () => {
    setEditModalShow(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].id === current_item.id) {
        break;
      }
    }
    let newData = [...data];
    newData[i].name = name === '' ? data[i].name : name;
    newData[i].position = position === '' ? data[i].position : position;
    newData[i].date = dateJoined === '' ? data[i].date : dateJoined;
    newData[i].description = desc === '' ? data[i].description : desc;
    newData[i].img = img === '' ? data[i].img : img;
    newData[i].contact = contact === '' ? data[i].contact : contact;

    //reinitialize
    setName('');
    setDateJoined('');
    setPosition('');
    setDesc('');
    setImg('');
    setContact('');

    setData(newData);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let maxID = 0;
    //find maximum ID to allocate to the new object.
    for (let i = 0; i < data.length; i++) {
      if (maxID < parseInt(data[i].id)) {
        maxID = parseInt(data[i].id);
      }
    }
    setData([...data, {
      id: (maxID + 1).toString(),
      name: name,
      position: position,
      date: dateJoined === '' ? "Joined " + getCurrentDate() : dateJoined, //get current date if 'date' is empty
      description: desc,
      img: img,
      contact: contact
    }]);
    //reinitialize
    setName('');
    setDateJoined('');
    setPosition('');
    setDesc('');
    setImg('');
    setContact('');
    setCreateModalShow(false);
  };
  const handleCreateClose = () => {
    setCreateModalShow(false);
  };

  const handleCreateShow = () => {
    setCreateModalShow(true);
  };
  return (
    <div>
      <Link style={{fontSize: "17px"}} className="goBack" to="/admin">
        <IoIosArrowBack/>Go Back
      </Link>
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="ourTeamEdit__header">
        Members List
      </h1>
      <DataTable
        data={data}
        headers={headers}
        changeItem={changeItem}
        showEdit={handleEditShow}
        deleteItem={handleDelete}
      />
      {/*Create Modal*/}
      <Modal size="lg" centered={true} animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OurTeamForm
            handleName={handleName}
            handlePosition={handlePosition}
            handleDate={handleDate}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleContact={handleContact}
            handleClose={handleCreateClose}
            handleSubmit={handleCreateSubmit}
          />
        </Modal.Body>
      </Modal>
      {/*Edit modal*/}
      <Modal size='lg' centered={true} animation={false} show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OurTeamForm
            currentItem={current_item}
            handleName={handleName}
            handlePosition={handlePosition}
            handleDate={handleDate}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleContact={handleContact}
            handleClose={handleEditClose}
            handleSubmit={handleEditSubmit}
          />
        </Modal.Body>
      </Modal>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Add a New Member
        </Button>
      </div>
    </div>
  );
}