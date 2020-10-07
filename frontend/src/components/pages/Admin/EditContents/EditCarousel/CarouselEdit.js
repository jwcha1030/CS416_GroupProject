import React, {useState} from 'react';
import {CarouselData} from '../../../HomePage/CarouselData';
import DataTable from "../DataTable";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";
import CarouselForm from "./CreateCarouselForm"

export default function CarouselEdit(prop) {
  const [current_item, setItem] = useState(CarouselData[0]);
  const [data, setData] = useState(CarouselData);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);

  const [newCaption, setNewCaption] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImg, setNewImg] = useState('');
  const headers = Object.keys(CarouselData[0]);

  const handleCaption = (e) => {
    setNewCaption(e.target.value);
  };
  const handleDesc = (e) => {
    setNewDesc(e.target.value);
  };
  const handleImg = (e) => {
    setNewImg(e.target.value);
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
    for(i=0; i<data.length; i++){
      if(data[i].id===current_item.id){
        break;
      }
    }
    let newData = [...data];
    newData[i].caption = newCaption;
    newData[i].description = newDesc;
    newData[i].img = newImg === '' ? data[i].img : newImg;
    setData(newData);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let maxID = 0;
    for(let i=0; i<data.length; i++){
      if(maxID<data[i].id) {
        maxID=data[i].id;
      }
    }
    setData([...data, {
      id: maxID + 1,
      caption: newCaption,
      description: newDesc,
      img: newImg,
      alt: "Slide_" + (maxID + 1)
    }]);
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
      <h1 className="carouselEdit__header">CarouselList</h1>
      <DataTable
        data={data}
        headers={headers}
        changeItem={changeItem}
        showEdit={handleEditShow}
        deleteItem={handleDelete}/>
      <Modal animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselForm
            handleCaption={handleCaption}
            handleDesc={handleDesc}
            handleImg={handleImg}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreateClose} buttonColor="msc_orange_invert" buttonSize="btn--medium">Close</Button>
          <Button onClick={handleCreateSubmit} buttonColor="msc_orange" buttonSize="btn--medium">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal animation={false} show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselForm
            handleCaption={handleCaption}
            handleDesc={handleDesc}
            handleImg={handleImg}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEditClose} buttonColor="msc_orange_invert" buttonSize="btn--medium">Close</Button>
          <Button onClick={handleEditSubmit} buttonColor="msc_orange" buttonSize="btn--medium">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
        Create a Slide
      </Button>
    </div>
  );
}
