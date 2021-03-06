import React, {useEffect, useRef, useState} from 'react';
import DataTable from "../DataTable";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import CarouselForm from "./CreateCarouselForm"
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import LOADER_GIF from "../../../../images/loading.gif";
import carouselItem from "../../../../components/home_carousel/CarouselItem";

export let bannerImg = null;

export default function CarouselEdit() {
  const [data, setData] = useState([]);
  const [current_item, setItem] = useState(null); //object
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);
  const [newCaption, setNewCaption] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newImg, setNewImg] = useState(null); //file object
  const [newIdx, setNewIdx] = useState(0);

  //['id', 'img', 'idx', 'caption','desc']
  const [headers, setHeaders] = useState([]); //table headers
  const [isLoading, setLoading] = useState(true);
  let axios = require('axios');

  //initial fetch
  const fetchAllData = () => {
    setLoading(true);
    axios.get("https://sunyk-msc-backend.herokuapp.com/home_page_carousel/get_all/")
      .then(response => {
        // console.log(response.data);
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            setData(response.data.results);
            setHeaders(Object.keys(response.data.results[0]));
            setLoading(false);
            console.log("fetch complete");
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Fetch Data: Unhandled res_code");
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Fetch: Call error");
        console.log(error);
      });
  };
  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")) {
      alert("You must log in!");
      window.location.href = "/adminlogin";
      return;
    }
    fetchAllData();
  }, []); //fetch once


  const handleCaption = (e) => {
    setNewCaption(e.target.value);
  };
  const handleDesc = (e) => {
    setNewDesc(e.target.value);
  };
  const handleImg = (e) => {
    // Changed from e.target.value to e.target.files[0] because the api needs a file
    // console.log(e.target.files[0].name);
    bannerImg = URL.createObjectURL(e.target.files[0]);
    setNewImg(e.target.files[0]);
  };
  const handleIdx = (e) => {
    setNewIdx(parseInt(e.target.value));
  };
  const handleDelete = (id) => {
    axios.delete("https://sunyk-msc-backend.herokuapp.com/home_page_carousel/del/" + id + "/")
      .then(response => {
        // console.log(response.data);
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // Everything worked correctly
            // Do something with the returned data
            // console.log(response.data.results);
            console.log("Delete SUCCESS");
            const removedItems = [...data].filter(item => item.id !== id);
            setData(removedItems);
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Delete: Unhandled res_code");
          }
        } else {
          // TODO handle unable to connect with database
          alert("Delete: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Delete: Call error");
        console.log(error);
      });
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
    let itemID = current_item.id;
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].id === itemID) {
        break;
      }
    }
    // console.log("Current Item ID:",itemID);
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/home_page_carousel/edit/" + itemID + "/";
    const formData = new FormData();
    let inputImg = newImg == null ? data[i].img : newImg;
    let inputCap = newCaption === '' ? data[i].caption : newCaption;
    let inputDesc = newDesc === '' ? data[i].desc : newDesc;
    let inputIdx = newIdx === 0 ? data[i].idx : newIdx;
    formData.append('img', inputImg);
    formData.append('caption', inputCap);
    formData.append('desc', inputDesc);
    formData.append('idx', inputIdx);
    axios.put(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        console.log("PUT rescode:", response.data.res_code);
        if (response.data.res_code === 1) {
          // Everything worked correctly
          // Do something with the returned data
          console.log("Put SUCCESS", response.data.home_page_carousel);
          //update frontend
          let newData = [...data];
          newData[i].caption = inputCap;
          newData[i].desc = inputDesc;
          newData[i].img = inputImg;
          newData[i].idx = inputIdx;
          setData(newData);
          // window.location.reload();

          // } else if (){
          // Check other res_code with else if
          // }
        } else {
          // Unhandled res_code
          alert("Put: Unhandled res_code");
        }
      } else {
        // TODO handle unable to connect with database
        alert("Put: unable to connect with database");
      }
    }).catch(function (error) {
      // TODO handle error with the call
      alert("Put: Call error");
      console.log(error);
    });

    //reinitialize
    setNewCaption('');
    setNewDesc('');
    setNewImg(null);
    setNewIdx(0);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/home_page_carousel/add/";
    // var apiBaseUrl = "http://127.0.0.1:8000/home_page_carousel/add/";
    // if the new data includes a File (eg img) use FromData();
    console.log("Post", newImg);
    if (newImg) {
      const formData = new FormData();
      formData.append('img', newImg);
      formData.append('caption', newCaption);
      formData.append('desc', newDesc);
      axios.post(apiBaseUrl, formData).then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // Everything worked correctly
            // Do something with the returned data
            console.log("Post SUCCESS", response.data.home_page_carousel);
            setData([...data, response.data.home_page_carousel]);
            window.location.reload();
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Post: Unhandled res_code");
          }
        } else {
          // TODO handle unable to connect with database
          alert("Post: unable to connect with database");
        }
      }).catch(function (error) {
        // TODO handle error with the call
        alert("Post: Call error");
        console.log(error);
      });
    } else {
      console.log("Create new slide without img");
      let payload = {
        caption: newCaption,
        desc: newDesc,
        img: ""
      };
      axios.post(apiBaseUrl, payload).then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          console.log("POST res_code:", response.data.res_code);
          if (response.data.res_code === 1) {
            // Everything worked correctly
            // Do something with the returned data
            console.log("Post SUCCESS", response.data.home_page_carousel);
            setData([...data, response.data.home_page_carousel]);
            window.location.reload();
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Post: Unhandled res_code");
          }
        } else {
          // TODO handle unable to connect with database
          alert("Post: unable to connect with database");
        }
      }).catch(function (error) {
        // TODO handle error with the call
        alert("Post: Call error");
        console.log(error);
      });
    }
    e.preventDefault();
    //reinitialize
    setNewCaption('');
    setNewDesc('');
    setNewImg(null);
    setNewIdx(0);
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
      {/*{console.log("DATA:",data)}*/}
      <Link style={{fontSize: "17px"}} className="goBack" to="/admin">
        <IoIosArrowBack/>Go Back
      </Link>
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="carouselEdit__header">
        Carousel List
      </h1>
      {isLoading ?
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
          src={LOADER_GIF}
        /> : <DataTable
          data={data}
          headers={headers}
          changeItem={changeItem}
          showEdit={handleEditShow}
          deleteItem={handleDelete}/>
      }

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
            handleIdx={handleIdx}
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