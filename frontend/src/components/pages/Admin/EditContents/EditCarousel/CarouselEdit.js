import React, {useState} from 'react';
import {CarouselData} from '../../../HomePage/CarouselData';
import DataTable from "../DataTable";
import {Button} from "../../../../Button";
import Modal from "react-bootstrap/Modal";
import CarouselForm from "./CreateCarouselForm"
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

export default function CarouselEdit(prop) {
	

	var axios = require('axios')

	
	// TODO IDK WHERE TO PUT THIS
	// put this in a constructor or something to get 
	axios.get('http://127.0.0.1:8000/home_page_carousel/get_all/',)
	.then(function (response) {
		// console.log(response.data);
		// Check if internet connection was working
		if(response.status == 200){
			if(response.data.res_code == 1){
				// Everything worked correctly
				// Do something with the returned data

			// } else if (){
				// Check other res_code with else if
			// }
			} else {
				// Unhandled res_code
			}
		} else {
			// TODO handle unable to connect with database
		}
	})
	.catch(function (error) {
		// TODO handle error with the call
		console.log(error);
	});
	
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
		// Changed from e.target.value to e.target.files[0] because the api needs a file
    setNewImg(e.target.files[0] );
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
    newData[i].caption = newCaption===''? data[i].caption:newCaption;
    setNewCaption(''); //reinitialize
    newData[i].description = newDesc===''? data[i].description:newDesc;
    setNewDesc('');
    newData[i].img = newImg === '' ? data[i].img : newImg;
    setNewImg('');
    setData(newData);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {

    var apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/home_page_carousel/add/";
    // var apiBaseUrl = "http://127.0.0.1:8000/home_page_carousel/add/";
		

		// if the data does not include a File (eg img) use a json 
    // var payload = {
    //   caption: newCaption,
		// 	desc: newDesc,
		// 	img: newImg
		// };
		
		// if the new data includes a File (eg img) use FromData();
		const formData = new FormData();
		formData.append('img', newImg);
		// Wait for API to include caption and description
		// formData.append('caption', newCaption);
		// formData.append('desc', newDesc);

		axios.post(apiBaseUrl, formData )
			.then( function (response) {
				// console.log(response);
				// Check if internet connection was working
				if(response.status == 200){
					if(response.data.res_code == 1){
						// Everything worked correctly
						// Do something with the returned data

					// } else if (){
						// Check other res_code with else if
					// }
					} else {
						// Unhandled res_code
					}
				} else {
					// TODO handle unable to connect with database
				}
			})
		.catch(function (error) {
			// TODO handle error with the call
			console.log(error);
		});

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
    //reinitialize
    setNewCaption('');
    setNewDesc('');
    setNewImg('');
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
      <Link style={{fontSize:"17px"}} className="goBack" to="/admin">
        <IoIosArrowBack/>Go Back
      </Link>
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="carouselEdit__header" >
        Carousel List
      </h1>
      <DataTable
        data={data}
        headers={headers}
        changeItem={changeItem}
        showEdit={handleEditShow}
        deleteItem={handleDelete}/>
      {/*Create Modal*/}
      <Modal centered={true} size='lg' animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselForm
            handleCaption={handleCaption}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleClose={handleCreateClose}
            handleSubmit={handleCreateSubmit}
          />
        </Modal.Body>
      </Modal>
      {/*Edit Modal*/}
      <Modal centered={true} size='lg' animation={false} show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselForm
            currentItem={current_item}
            handleCaption={handleCaption}
            handleDesc={handleDesc}
            handleImg={handleImg}
            handleClose={handleEditClose}
            handleSubmit={handleEditSubmit}
          />
        </Modal.Body>
      </Modal>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
            Create
          </Button>
        </div>
    </div>
  );
}
