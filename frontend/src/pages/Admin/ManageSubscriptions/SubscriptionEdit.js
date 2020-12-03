import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import DataTable from "../EditContents/DataTable";
import {Button} from "../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import SubscriptionForm from "./SubscriptionForm";

export default function () {
  const [data, setData] = useState([]);
  const [current_item, setItem] = useState(data[0]);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  //const [date, setDate]= useState('');
  const [headers, setHeaders] = useState([]);
  // const [isSubscribed, setIsSubscribed]= useState("yes");

  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
  };

  let axios = require('axios');
  const fetchAllData = async () => {
    await axios.get("https://sunyk-msc-backend.herokuapp.com/email/get_all/")
      .then(response => {
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            setData(response.data.results);
            setHeaders(Object.keys(response.data.results[0]));
            console.log("fetch complete");
          } else {
            alert("Fetch Data: Unhandled res_code");
          }
        } else {
          alert("Fetch: Unable to connect with database");
        }
      }).catch(function (error) {
        alert("Fetch: Call error");
        console.log(error);
      })
  };

  useEffect(() => {
    if (!sessionStorage.getItem("isLoggedIn")){
      alert("You must log in!");
      window.location.href="/adminlogin";
      return;
    }
    fetchAllData();
  }, []);

  const changeItem = (id) => {
    const currentItem = (data.filter(item => item.id === id))[0]; //selects the item that is clicked
    setItem(currentItem);
  };

  const handleDelete = (id) => {
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/email/unsubscribe/";
    let emailToBeRemoved;
    console.log("length:",data.length);
    data.map((subscription,i)=>{
      if(subscription.id===id){
        emailToBeRemoved=subscription.email;
      }
    });
    const formData = new FormData();
    formData.append('email', emailToBeRemoved);
    formData.append('comment', "Unsubscribed by the admin");
    axios.post(apiBaseUrl, formData).then(response => {
      if (response.status === 200) {
        console.log("Unsubscribe POST rescode:", response.data.res_code);
        if (response.data.res_code === 1) {
          console.log("Unsubscribe POST success:", response.data.res_msg);
          //only changes deletion in the frontend
          const removedItems = [...data].filter(item => item.id !== id);
          setData(removedItems);
          //reload to see updates from the backend
          window.location.reload();
        } else {
          // Unhandled res_code
          alert("Unsubscribe POST: Unhandled res_code");
        }
      } else {
        // TODO handle unable to connect with database
        alert("Unsubscribe POST: unable to connect with database");
      }
    }).catch(function (error){
      alert("Unsubscribe POST: Call error");
      console.log(error);
    });
  };
  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  /*
  const handleSubscribed = (e)=>{
      let target = e.target;
      let val;
      if(target.type==='checkbox'){
        val=target.checked?"yes":"no";
      }
      else{
        val=target.value;
      }
      setIsSubscribed(val);
    };*/

//create modal
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/email/subscribe/";
    let formData = new FormData();
    formData.append('email', email);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    axios.post(apiBaseUrl, formData).then(response => {
      if (response.status === 200) {
        console.log("Subscribe POST res_code:", response.data.res_code);
        if (response.data.res_code === 1) {
          console.log("Subscribe Post Success", response.data.results);
          window.location.reload();
        }
        else{
          alert("Subscribe POST: Unhandled res_code", response.data.res_code);
        }
      }
      else{
        alert("Subscribe POST: Unable to connect with database")
      }
    }).catch(function (error) {
      alert("Subscribe Post: Call error");
      console.log(error);
    });
    //reinitialize
    setFirstName('');
    setLastName('');
    // setDate('');
    setEmail('');
    // setIsSubscribed("yes");
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
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="subscriptionEdit__header">
        Subscription Mail List
      </h1>
      <DataTable
        data={data}
        headers={headers}
        changeItem={changeItem}
        deleteItem={handleDelete}
      />
      {/*Create Modal*/}
      <Modal size="lg" centered={true} animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SubscriptionForm
            handleFirstName={handleFirstName}
            handleLastName={handleLastName}
            handleEmail={handleEmail}
            // handleSubscribed = {handleSubscribed}
            handleClose={handleCreateClose}
            handleSubmit={handleCreateSubmit}
          />
        </Modal.Body>
      </Modal>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Button type="button" onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Subscribe a User
        </Button>
      </div>
    </div>
  );
}
