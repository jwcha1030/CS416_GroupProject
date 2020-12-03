import React, {useEffect, useState} from 'react';
import DataTable from "../DataTable";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import CollectionsForm from "./CollectionsForm";

export let mainImage=null;
export let galImage1=null;
export let galImage2=null;
export let galImage3=null;
export let galImage4=null;
export let galImage5=null;
export let galImage6=null;

export default function CollectionEdit() {
  const [current_item, setItem] = useState(null);
  const [data, setData] = useState([]);
  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);
  const [headers, setHeaders] = useState([]); //table headers

  const [collectionId, setCollectionId] = useState(0);
  const [name, setName]=useState("");
  const [price, setPrice] = useState(-1);
  const [desc, setDesc] = useState('');
  const [mainImg, setMainImg] = useState(null);
  const [galImg1, setGalImg1] = useState(""); //type can be either FILE or ""
  const [galImg2, setGalImg2] = useState("");
  const [galImg3, setGalImg3] = useState("");
  const [galImg4, setGalImg4] = useState("");
  const [galImg5, setGalImg5] = useState("");
  const [galImg6, setGalImg6] = useState("");
  const [isActive, setIsActive] = useState(true);

  let axios = require('axios');
  //initial fetch
  const fetchAllData = () => {
    axios.get("https://sunyk-msc-backend.herokuapp.com/collection/item/get_all/with_collection_info/")
      .then(response => {
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
            console.log("Rescode:",response.data.res_code);
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
    if (!sessionStorage.getItem("isLoggedIn")){
      alert("You must log in!");
      window.location.href="/adminlogin";
      return;
    }
    fetchAllData();
  }, []); //fetch once

  //form handlers
  const handleCollectionId = (e) => {
    setCollectionId(e.target.value);
  };
  const handleName = (e) =>{
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleMainImg = (e) =>{
    mainImage=URL.createObjectURL(e.target.files[0]);
    setMainImg(e.target.files[0]);
  };
  const handleGalImg1 = (e) => {
    galImage1=URL.createObjectURL(e.target.files[0]);
    setGalImg1(e.target.files[0]);
  };
  const handleGalImg2 = (e) => {
    galImage2=URL.createObjectURL(e.target.files[0]);
    setGalImg2(e.target.files[0]);
  };
  const handleGalImg3 = (e) => {
    galImage3=URL.createObjectURL(e.target.files[0]);
    setGalImg3(e.target.files[0]);
  };
  const handleGalImg4 = (e) => {
    galImage4=URL.createObjectURL(e.target.files[0]);
    setGalImg4(e.target.files[0]);
  };
  const handleGalImg5 = (e) => {
    galImage5=URL.createObjectURL(e.target.files[0]);
    setGalImg5(e.target.files[0]);
  };
  const handleGalImg6 = (e) => {
    galImage6=URL.createObjectURL(e.target.files[0]);
    setGalImg6(e.target.files[0]);
  };
  const handleActive = (e) =>{
    let target = e.target;
    let val;
    if(target.type==='checkbox'){
      val=target.checked;
    }else{
      val=target.value;
    }
    setIsActive(val);
  };

  const reinitializeStates =()=>{
    setCollectionId(0);
    setName("");
    setPrice(-1);
    setDesc("");
    setMainImg(null);
    setGalImg1("");
    setGalImg2("");
    setGalImg3("");
    setGalImg4("");
    setGalImg5("");
    setGalImg6("");
    setIsActive(true);
    console.log("states reinitialized");
  };

  const handleDelete = (id) => {
    axios.delete("https://sunyk-msc-backend.herokuapp.com/collection/item/del/" + id + "/")
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
    e.preventDefault();
    let itemID = current_item.id;
    let i;
    for (i = 0; i < data.length; i++) {
      if (data[i].id === current_item.id) {
        break;
      }
    }
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/collection/item/edit/" + itemID + "/";
    const formData = new FormData();

    let inputColID = collectionId ===0 ? data[i].collection_id: collectionId;
    let inputName = name === "" ? data[i].name: name;
    let inputPrice = price === -1 ? data[i].price:price;
    let inputDesc = desc === "" ? data[i].desc: desc;
    let inputMainImg = mainImg === null ? data[i].main_img: mainImg;
    let inputGalImg1 = galImg1 === "" ? data[i].gallery_img1: galImg1;
    let inputGalImg2 = galImg2 === "" ? data[i].gallery_img2: galImg2;
    let inputGalImg3 = galImg3 === "" ? data[i].gallery_img3: galImg3;
    let inputGalImg4 = galImg4 === "" ? data[i].gallery_img4: galImg4;
    let inputGalImg5 = galImg5 === "" ? data[i].gallery_img5: galImg5;
    let inputGalImg6 = galImg6 === "" ? data[i].gallery_img6: galImg6;
    formData.append("collection_id",inputColID);
    formData.append("name",inputName);
    formData.append("price",inputPrice);
    formData.append("desc",inputDesc);
    formData.append("main_img",inputMainImg);
    formData.append("gallery_img1",inputGalImg1);
    formData.append("gallery_img2",inputGalImg2);
    formData.append("gallery_img3",inputGalImg3);
    formData.append("gallery_img4",inputGalImg4);
    formData.append("gallery_img5",inputGalImg5);
    formData.append("gallery_img6",inputGalImg6);

    axios.put(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("Put SUCCESS", response.data.collection_item);
          //update frontend
          let newData = [...data];
          newData[i].collection_id = inputColID;
          newData[i].name = inputName;
          newData[i].price = inputPrice;
          newData[i].desc = inputDesc;
          newData[i].main_img = inputMainImg;
          newData[i].gallery_img1 = inputGalImg1;
          newData[i].gallery_img2 = inputGalImg2;
          newData[i].gallery_img3 = inputGalImg3;
          newData[i].gallery_img4 = inputGalImg4;
          newData[i].gallery_img5 = inputGalImg5;
          newData[i].gallery_img6 = inputGalImg6;
          setData(newData);
          window.location.reload();
        } else {
          // Unhandled res_code
          alert("Put: Unhandled res_code");
          console.log("PUT rescode:", response.data.res_code);
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

    reinitializeStates();
    setEditModalShow(false);

  };

  //create modal handler
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/collection/item/add/";
    const formData = new FormData();
    formData.append('collection_id',collectionId);
    formData.append('name',name);
    formData.append('price',price);
    formData.append('desc',desc);
    formData.append('main_img',mainImg);
    formData.append('gallery_img1',galImg1);
    formData.append('gallery_img2',galImg2);
    formData.append('gallery_img3',galImg3);
    formData.append('gallery_img4',galImg4);
    formData.append('gallery_img5',galImg5);
    formData.append('gallery_img6',galImg6);
    axios.post(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("Post SUCCESS", response.data.collection_item);
          setData([...data, response.data.collection_item]);
          window.location.reload();
        } else {
          // Unhandled res_code
          alert("Post: Unhandled res_code");
          console.log("Res_code:",response.data.res_code);
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
    reinitializeStates();
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
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="collectionsEdit__header">
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
            handleCollectionId = {handleCollectionId}
            handleName={handleName}
            handlePrice={handlePrice}
            handleDesc={handleDesc}
            handleMainImg = {handleMainImg}
            handleGalImg1 = {handleGalImg1}
            handleGalImg2 = {handleGalImg2}
            handleGalImg3 = {handleGalImg3}
            handleGalImg4 = {handleGalImg4}
            handleGalImg5 = {handleGalImg5}
            handleGalImg6 = {handleGalImg6}
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
            handleCollectionId = {handleCollectionId}
            handleName={handleName}
            handlePrice={handlePrice}
            handleDesc={handleDesc}
            handleMainImg = {handleMainImg}
            handleGalImg1 = {handleGalImg1}
            handleGalImg2 = {handleGalImg2}
            handleGalImg3 = {handleGalImg3}
            handleGalImg4 = {handleGalImg4}
            handleGalImg5 = {handleGalImg5}
            handleGalImg6 = {handleGalImg6}
            handleActive = {handleActive}
            handleClose={handleEditClose}
            handleSubmit={handleEditSubmit}
            currentItem={current_item}

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
