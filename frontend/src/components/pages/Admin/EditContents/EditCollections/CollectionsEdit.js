import React, {useState} from 'react';
import DataTable from "../DataTable";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import ProductDataAll from "../../../../ProductDataAll";
import CollectionsForm from "./CollectionsForm";

export default function CollectionEdit() {
  const [current_item, setItem] = useState(ProductDataAll[0]);
  const [data, setData] = useState(ProductDataAll);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);

  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [newLabel, setNewLabel] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');
  const [school, setSchool] = useState('');
  const [type, setType] = useState('');

  const headers = Object.keys(ProductDataAll[0]);

  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleNewLabel = (e) => {
    let target = e.target;
    let val;
    if(target.type ==='checkbox'){
      val= target.checked? "New":"";
    }
    else{
      val=target.value;
    }
    setNewLabel(val);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
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
    newData[i].price = price === '' ? data[i].price : price;
    newData[i].title = title === '' ? data[i].title : title;
    newData[i].date_added = date === '' ? data[i].date_added : date;
    newData[i].new = newLabel === '' ? data[i].new : newLabel;
    newData[i].description = desc === '' ? data[i].description : desc;
    newData[i].img = img === '' ? data[i].img : img;
    newData[i].school = school === '' ? data[i].school : school;
    newData[i].type = type === '' ? data[i].type : type;

    //reinitialize
    setPrice('');
    setDate('');
    setTitle('');
    setNewLabel('');
    setDesc('');
    setSchool('');
    setType('');
    setImg('');
    setData(newData);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let maxID = 0;
    //find maximum ID to allocate to the new object.
    for (let i = 0; i < data.length; i++) {
      if (maxID < data[i].id) {
        maxID = data[i].id;
      }
    }
    setData([...data, {
      id: maxID + 1,
      price: price,
      date_added: date === '' ? getCurrentDate() : date, //get current date if 'date' is empty
      title: title,
      new: newLabel,
      description: desc,
      img: img,
      school: school,
      type: type
    }]);
    //reinitialize
    setPrice('');
    setDate('');
    setTitle('');
    setNewLabel('');
    setDesc('');
    setImg('');
    setSchool('');
    setType('');
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
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="carouselEdit__header">
        Collections List
      </h1>
      <DataTable
        data={data}
        headers={headers}
        changeItem={changeItem}
        showEdit={handleEditShow}
        deleteItem={handleDelete}/>
      {/*Create Modal*/}
      <Modal size="lg" centered={true} animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollectionsForm
            handlePrice={handlePrice}
            handleDate={handleDate}
            handleTitle={handleTitle}
            handleNewLabel={handleNewLabel}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleSchool={handleSchool}
            handleType={handleType}
            handleClose={handleCreateClose}
            handleSubmit={handleCreateSubmit}
          />
        </Modal.Body>
      </Modal>
      {/*Edit modal*/}
      <Modal size='lg' centered={true} animation={false} show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollectionsForm
            currentItem={current_item}
            handlePrice={handlePrice}
            handleDate={handleDate}
            handleTitle={handleTitle}
            handleNewLabel={handleNewLabel}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleSchool={handleSchool}
            handleType={handleType}
            handleClose={handleEditClose}
            handleSubmit={handleEditSubmit}
          />
        </Modal.Body>
      </Modal>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Create
        </Button>
      </div>
    </div>
  );
}
