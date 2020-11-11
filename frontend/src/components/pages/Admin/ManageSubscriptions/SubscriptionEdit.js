import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import {subscriptionData} from "./SubscriptionData"
import DataTable from "../EditContents/DataTable";
import {Button} from "../../../button/Button";
import Modal from "react-bootstrap/Modal";
import SubscriptionForm from "./SubscriptionForm";

export default function () {
  const table_headers = Object.keys(subscriptionData.mailList[0]);

  const [data, setData]= useState(subscriptionData.mailList);
  const [current_item, setItem] = useState(data[0]);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate]= useState('');
  const [isSubscribed, setIsSubscribed]= useState("yes");

  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today
  };

  const changeItem = (id) => {
    const currentItem = (data.filter(item => item.id === id))[0]; //selects the item that is clicked
    setItem(currentItem);
  };

  const handleDelete = (id) => {
    const removedItems = [...data].filter(item => item.id !== id);
    setData(removedItems);
  };
  const handleName=(e)=>{
    setName(e.target.value);
  };
  const handleEmail =(e)=>{
    setEmail(e.target.value);
  };

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
  };
  //create modal
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
      name: name,
      email: email,
      date: getCurrentDate(), //get current date if 'date' is empty
      subscribed: isSubscribed
    }]);
    //reinitialize
    setName('');
    setDate('');
    setEmail('');
    setIsSubscribed("yes");
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
        headers={table_headers}
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
            handleName={handleName}
            handleEmail={handleEmail}
            handleSubscribed = {handleSubscribed}
            handleClose={handleCreateClose}
            handleSubmit={handleCreateSubmit}
          />
        </Modal.Body>
      </Modal>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Subscribe a User
        </Button>
      </div>
    </div>
  );
}
