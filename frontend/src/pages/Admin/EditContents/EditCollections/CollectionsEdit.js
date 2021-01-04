import React, {useEffect, useState} from 'react';
import DataTable from "../DataTable";
import {Button} from "../../../../components/button/Button";
import Modal from "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";
import CollectionsForm from "./CollectionsForm";
import LOADER_GIF from "../../../../images/loading.gif";
import CatalogDisplayModal from "./CatalogDisplayModal";

export let mainImage = null;
export let galImage1 = null;
export let galImage2 = null;
export let galImage3 = null;
export let galImage4 = null;
export let galImage5 = null;
export let galImage6 = null;

export default function CollectionEdit() {
  const [current_item, setItem] = useState(null);
  const [data, setData] = useState([]);

  const [showCreateModal, setCreateModalShow] = useState(false);
  const [showEditModal, setEditModalShow] = useState(false);
  const [showCatalogModal, setCatalogModalShow] = useState(false); //state for displaying 360view image CRUD modal

  const [headers, setHeaders] = useState([]); //table headers
  const [isLoading, setLoading] = useState(true);

  const [collectionId, setCollectionId] = useState(0);
  const [name, setName] = useState("");
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

  const [hasCatalog, setHasCatalog] = useState(false);
  const [catalogImgList, setCatalogImgList] = useState({}); //in format of {0: img1 file, 1: img2 file, 2: img3 file, ...}
  const [catalogID, setCatalogID] = useState(-1);

  let axios = require('axios');
  //initial fetch
  const fetchAllData = () => {
    setLoading(true);
    axios.get("https://sunyk-msc-backend.herokuapp.com/collection/item/get_all/with_collection_info/")
      .then(response => {
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
            console.log("Rescode:", response.data.res_code);
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
  }, []); //fetch once when loaded

  const fetchGalleryImages = (id) => {
    setLoading(true);
    axios.get("https://sunyk-msc-backend.herokuapp.com/collection/item/get/" + id + "/")
      .then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            let itemData = response.data.collection_item;
            // console.log("ItemID:", id, "itemObj:", itemData);
            setGalImg1(itemData.gallery_img1);
            setGalImg2(itemData.gallery_img2);
            setGalImg3(itemData.gallery_img3);
            setGalImg4(itemData.gallery_img4);
            setGalImg5(itemData.gallery_img5);
            setGalImg6(itemData.gallery_img6);
            setLoading(false);
            console.log("fetch gallery images complete");
            // } else if (){
            // Check other res_code with else if
            // }
          } else {
            // Unhandled res_code
            alert("Fetch Gallery Images: Unhandled res_code");
            console.log("Rescode:", response.data.res_code);
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch Gallery Images: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Fetch Gallery Images: Call error");
        console.log(error);
      });
  };

  const checkAndFetchCatalogImages = (itemID) => {
    setLoading(true);
    let cd_id = catalogID; //initialize
    axios.get("https://sunyk-msc-backend.herokuapp.com/collection/item/" + itemID + "/catalog_display/has/")
      .then(response => {
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            // console.log(response.data.results);
            cd_id = response.data.cd_id;
            console.log("catlogID:", cd_id, "hasCatalog?:", response.data.has);
            setCatalogID(cd_id);
            console.log("fetch hasCatalogImages complete");
            if(cd_id > -1){
              console.log("CALLING fetchCatalogImages()");
              fetchCatalogImages(cd_id);
            }
            else{
              console.log("No catalog images found");
              setLoading(false);
            }
          } else {
            // Unhandled res_code
            alert("Fetch hasCatalogImages: Unhandled res_code");
            console.log("res_code:", response.data.res_code);
            setLoading(false);
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch hasCatalogImages: Unable to connect with database");
          setLoading(false);
        }
      });

  };

  const fetchCatalogImages = (cd_id) => {
    console.log("CatalogImages Found; loading fetchCatalogImages()");
    //setLoading(true) is not necessary as fetchCatalogImages is called from checkAndFetchCatalogImagesExist().
    axios.get("https://sunyk-msc-backend.herokuapp.com/catalog_display/" + cd_id + "/images/get_formatted/")
      .then(response => {
        // Check if internet connection was working
        if (response.status === 200) {
          if (response.data.res_code === 1) {
            console.log("fetchCatalogImages:", response.data.results);
            for (const [key, val] of Object.entries(response.data.results)){
              console.log("key:",key,"value:",val);
            }
            setLoading(false);
            console.log("fetch catalogImageList complete");
          } else {
            // Unhandled res_code
            alert("Fetch catalogImageList: Unhandled res_code");
            console.log("Rescode:", response.data.res_code);
          }
        } else {
          // TODO handle unable to connect with database
          alert("Fetch catalogImageList: Unable to connect with database");
        }
      })
      .catch(function (error) {
        // TODO handle error with the call
        alert("Fetch Gallery Images: Call error");
        console.log(error);
      });
  };

  //form handlers
  const handleCollectionId = (e) => {
    setCollectionId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleMainImg = (e) => {
    mainImage = URL.createObjectURL(e.target.files[0]);
    setMainImg(e.target.files[0]);
  };
  const handleGalImg1 = (e) => {
    galImage1 = URL.createObjectURL(e.target.files[0]);
    setGalImg1(e.target.files[0]);
  };
  const handleGalImg2 = (e) => {
    galImage2 = URL.createObjectURL(e.target.files[0]);
    setGalImg2(e.target.files[0]);

  };
  const handleGalImg3 = (e) => {
    galImage3 = URL.createObjectURL(e.target.files[0]);
    setGalImg3(e.target.files[0]);
  };
  const handleGalImg4 = (e) => {
    galImage4 = URL.createObjectURL(e.target.files[0]);
    setGalImg4(e.target.files[0]);
  };
  const handleGalImg5 = (e) => {
    galImage5 = URL.createObjectURL(e.target.files[0]);
    setGalImg5(e.target.files[0]);
  };
  const handleGalImg6 = (e) => {
    galImage6 = URL.createObjectURL(e.target.files[0]);
    setGalImg6(e.target.files[0]);
  };
  const handleActive = (e) => {
    e.preventDefault();
    let target = e.target;
    let val;
    if (target.type === 'checkbox') {
      val = target.checked;
      console.log("YESS", val);
    } else {
      val = target.value;
      console.log("NO", val);
    }
    setIsActive(val);
  };

  const reinitializeStates = () => {
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
    mainImage = null;
    galImage1 = null;
    galImage2 = null;
    galImage3 = null;
    galImage4 = null;
    galImage5 = null;
    galImage6 = null;
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
  const handleEditShow = (id) => {
    fetchGalleryImages(id);
    setEditModalShow(true);
  };
  const handleEditClose = () => {
    reinitializeStates();
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
    console.log("Editing Item:", data[i], "current_item.id:", itemID);
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/collection/item/edit/" + itemID + "/";
    const formData = new FormData();

    let inputColID = collectionId === 0 ? data[i].collection_id : collectionId;
    let inputName = name === "" ? data[i].name : name;
    let inputPrice = price === -1 ? data[i].price : price;
    let inputDesc = desc === "" ? data[i].desc : desc;
    let inputMainImg = mainImg == null ? data[i].main_img : mainImg;
    //No need to check for empty galImges because fetchGalleryImage is done when edit modal is displayed
    formData.append("collection_id", inputColID);
    formData.append("name", inputName);
    formData.append("price", inputPrice);
    formData.append("desc", inputDesc);
    formData.append("main_img", inputMainImg);
    formData.append("gallery_img1", galImg1);
    formData.append("gallery_img2", galImg2);
    formData.append("gallery_img3", galImg3);
    formData.append("gallery_img4", galImg4);
    formData.append("gallery_img5", galImg5);
    formData.append("gallery_img6", galImg6);
    formData.append("is_active", isActive ? 'true' : 'false');
    axios.put(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("Put SUCCESS", response.data.collection_item);
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
    formData.append('collection_id', collectionId);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('desc', desc);
    formData.append('main_img', mainImg);
    formData.append('gallery_img1', galImg1);
    formData.append('gallery_img2', galImg2);
    formData.append('gallery_img3', galImg3);
    formData.append('gallery_img4', galImg4);
    formData.append('gallery_img5', galImg5);
    formData.append('gallery_img6', galImg6);
    // formData.append("is_active",isActive ?'true':'false');
    axios.post(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("Post SUCCESS", response.data.collection_item);
          window.location.reload();
        } else {
          // Unhandled res_code
          alert("Post: Unhandled res_code");
          console.log("Res_code:", response.data.res_code);
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

  const handleCatalogShow = (id) => {
    checkAndFetchCatalogImages(id);
    setCatalogModalShow(true);
  };

  const handleCatalogClose = () => {
    setCatalogModalShow(false);
  };

  return (
    <div>
      <Link style={{fontSize: "17px"}} className="goBack" to="/admin">
        <IoIosArrowBack/>Go Back
      </Link>
      <h1 style={{textAlign: "center", fontWeight: "bold"}} className="collectionsEdit__header">
        Collections List
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
        /> :
        <DataTable
          data={data}
          headers={headers}
          changeItem={changeItem}
          showEdit={handleEditShow}
          showCatalog={handleCatalogShow}
          deleteItem={handleDelete}
        />
      }
      {/*Create Modal*/}
      <Modal size="lg" centered={true} animation={false} show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CollectionsForm
            handleCollectionId={handleCollectionId}
            handleName={handleName}
            handlePrice={handlePrice}
            handleDesc={handleDesc}
            handleMainImg={handleMainImg}
            handleGalImg1={handleGalImg1}
            handleGalImg2={handleGalImg2}
            handleGalImg3={handleGalImg3}
            handleGalImg4={handleGalImg4}
            handleGalImg5={handleGalImg5}
            handleGalImg6={handleGalImg6}
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
          {isLoading ?
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
              src={LOADER_GIF}
            /> : <CollectionsForm
              handleCollectionId={handleCollectionId}
              handleName={handleName}
              handlePrice={handlePrice}
              handleDesc={handleDesc}
              handleMainImg={handleMainImg}
              handleGalImg1={handleGalImg1}
              handleGalImg2={handleGalImg2}
              handleGalImg3={handleGalImg3}
              handleGalImg4={handleGalImg4}
              handleGalImg5={handleGalImg5}
              handleGalImg6={handleGalImg6}
              handleActive={handleActive}
              handleClose={handleEditClose}
              handleSubmit={handleEditSubmit}
              currentItem={current_item}
              galImg1={galImg1}
              galImg2={galImg2}
              galImg3={galImg3}
              galImg4={galImg4}
              galImg5={galImg5}
              galImg6={galImg6}
            />
          }
        </Modal.Body>
      </Modal>
      {/*360View Catalog Modal*/}
      <CatalogDisplayModal show={showCatalogModal} hide={handleCatalogClose} hasCatalog={hasCatalog}
                           isLoading={isLoading} setLoading={setLoading}/>

      <div style={{display: "flex", justifyContent: "center"}}>
        <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Add an Item
        </Button>
      </div>
    </div>
  );
}
