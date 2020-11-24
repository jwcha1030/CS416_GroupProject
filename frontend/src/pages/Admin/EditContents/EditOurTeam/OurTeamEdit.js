import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import DataTable from "../DataTable";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import OurTeamForm from "./OurTeamForm";
import portrait from "../../../../images/male.jpg";

export default function OurTeamEdit(props) {
  const [current_item, setItem] = useState(null);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);

  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);

  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [dateJoined, setDateJoined] = useState(''); //date_joined by default
  const [desc, setDesc] = useState(''); //position_desc field in DB
  const [img, setImg] = useState(null);
  const [contact, setContact] = useState('');
  const [idx, setIdx] = useState(0);

  const getCurrentDate = () => {
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm;
    return today
  };

  let axios = require('axios');
  const fetchAllData = () => {
     axios.get("https://sunyk-msc-backend.herokuapp.com/team_page_person/get_all/")
      .then(response => {
        // console.log(response.data);
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            setData(response.data.results);
            setHeaders(Object.keys(response.data.results[0]));
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
  useEffect( async () => {
    await fetchAllData()
  }, []); //fetch once


  //inputs
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleDate = (e) => {
    let dateVal = e.target.value;
    setDateJoined("Joined: " + dateVal.slice(0, -3));
  };
  const handleDesc = (e) => {
    setDesc(e.target.value)
  };
  const handleImg = (e) => {
    setImg(e.target.files[0])
  };
  const handleContact = (e) => {
    setContact(e.target.value)
  };
  const handleIdx = (e) => {
    let idx = e.target.value;
    setIdx(parseInt(idx));
  };

  const handleDelete = (id) => {
    axios.delete("https://sunyk-msc-backend.herokuapp.com/team_page_person/del/" + id + "/")
      .then(response => {
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            console.log("Delete SUCCESS");
            const removedItems = [...data].filter(item => item.id !== id);
            setData(removedItems);
          } else {
            alert("Delete: Unhandled res_code");
          }
        } else {
          alert("Delete: Unable to connect with database");
        }
      }).catch(function (error) {
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
      if (data[i].id === current_item.id) {
        break;
      }
    }
    // console.log("Current Item ID:", itemID);
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/team_page_person/edit/" + itemID + "/";
    const formData = new FormData();
    let inputImg = img == null ? data[i].img : img;
    let inputPos = position === '' ? data[i].position : position;
    let inputDesc = desc === '' ? data[i].position_desc : desc;
    let inputName = name === '' ? data[i].name : name;
    let inputContact = contact === '' ? data[i].contact : contact;
    let inputDateJoined = dateJoined === '' ? data[i].introduction : dateJoined;
    let inputIdx = idx === 0 ? data[i].idx : idx;
    formData.append('idx', inputIdx);
    formData.append('img', inputImg);
    formData.append('position', inputPos);
    formData.append('position_desc', inputDesc);
    formData.append('name', inputName);
    formData.append('contact', inputContact);
    formData.append('introduction', inputDateJoined);

    axios.put(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        console.log("PUT rescode:", response.data.res_code);
        if (response.data.res_code === 1) {
          console.log("Put SUCCESS", response.data.team_page_person);
          //update frontend
          let newData = [...data];
          newData[i].idx = inputIdx;
          newData[i].position = inputPos;
          newData[i].position_desc = inputDesc;
          newData[i].name = inputName;
          newData[i].img = inputImg;
          newData[i].contact = inputContact;
          newData[i].introduction = inputDateJoined;
          setData(newData);
          // window.location.reload();
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
    setName('');
    setDateJoined('');
    setPosition('');
    setDesc('');
    setImg(null);
    setContact('');
    setIdx(0);
    setEditModalShow(false);
  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/team_page_person/add/";
    let inputDate = dateJoined === '' ? "Joined " + getCurrentDate() : dateJoined;
    let formData = new FormData();
    formData.append('position', position);
    formData.append('position_desc', desc);
    formData.append('name', name);
    formData.append('contact', contact);
    formData.append('introduction', inputDate);
    if (img) {
      formData.append('img', img);
      axios.post(apiBaseUrl, formData).then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          console.log("POST res_code:", response.data.res_code);
          if (response.data.res_code === 1) {
            // Everything worked correctly
            // Do something with the returned data
            console.log("Post SUCCESS", response.data.team_page_person);
            window.location.reload();
          } else {
            // Unhandled res_code
            alert("Post: Unhandled res_code");
          }
        } else {
          alert("Post: unable to connect with database");
        }
      }).catch(function (error) {
        alert("Post: Call error");
        console.log(error);
      });
    }
    else{

      console.log("Create new slide without img");
      // let payload = {
      //   position: position,
      //   position_desc: desc,
      //   name: name,
      //   contact: contact,
      //   introduction: inputDate,
      //   img: portrait
      // };
      formData.append('img', portrait);
      axios.post(apiBaseUrl, formData).then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          console.log("POST res_code:", response.data.res_code);
          if (response.data.res_code === 1) {
            // Everything worked correctly
            // Do something with the returned data
            console.log("Post SUCCESS", response.data.team_page_person);
            window.location.reload();
          } else {
            // Unhandled res_code
            console.log("res_code error:",response.data.res_code);
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
      })
    }
    //reinitialize
    setName('');
    setDateJoined('');
    setPosition('');
    setDesc('');
    setImg(null);
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
            handleIdx={handleIdx}
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