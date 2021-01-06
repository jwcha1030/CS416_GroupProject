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
  const [catalogImages, setCatalogImages] = useState({}); //in format of {0: img1 file, 1: img2 file, 2: img3 file, ...}
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
            if (cd_id > -1) {
              console.log("CALLING fetchCatalogImages()");
              setHasCatalog(true);
              fetchCatalogImages(cd_id);
            } else {
              console.log("No catalog images found");
              setHasCatalog(false);
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
            let images = {};
            for (let [key, val] of Object.entries(response.data.results)) {
              console.log("key:", key, "value:", val);
              images[parseInt(key)] = val;
            }
            setCatalogImages(images);
            setLoading(false);
            console.log("fetch catalogImageList complete:", response.data.results);
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
    setCatalogID(-1);
    setHasCatalog(false);
    setCatalogImages({});
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
    setCatalogImages({});
    setHasCatalog(false);
    setCatalogModalShow(false);
  };


  const urltoFile=(url, filename, mimeType)=>{
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename,{type:mimeType});})
        );
   };

  //checks if the input is in dataURL
  const isDataURL=(s)=> {
    const regex=/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    return !!s.match(regex);
  };

  const dataURLtoFile = (dataurl, filename) => {
    if(isDataURL(dataurl)){
      let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type: mime});
    }
    return dataurl;
  };


  const handleAddCatalogSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //TODO: addListCollectionItemCatalogDisplayImages api call here
    console.log("Adding Item:", current_item, "current_item.id:", current_item.id, "catalog_id:", catalogID);

    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/collection/item/" + current_item.id + "/catalog_display/add_list/";
    const formData = new FormData();
    let numOfImg = Object.keys(catalogImages).length;
    formData.append("num_of_files", numOfImg);
    for (let [key, val] of Object.entries(catalogImages)) {
      formData.append("img" + key, dataURLtoFile(val, "img" + key));
    }
    for (let pair of formData.entries()) {
      console.log(pair[0] + " " + pair[1]);
    }
    axios.post(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("AddCatalogSubmit SUCCESS");
          // window.location.reload();
          setLoading(false);
        } else {
          // Unhandled res_code
          alert("AddCatalogSubmit: Unhandled res_code");
          console.log("Res_code:", response.data.res_code);
        }
      } else {
        // TODO handle unable to connect with database
        alert("AddCatalogSubmit: unable to connect with database");
      }
    }).catch(function (error) {
      // TODO handle error with the call
      alert("AddCatalogSubmit: Call error");
      console.log(error);
    });

    setHasCatalog(false);
    setCatalogModalShow(false);
  };
  const handleEditCatalogSubmit = () => {
    setLoading(true);
    //TODO: editAllCollectionItemCatalogDisplayImage api call here
    console.log("Editing Item:", current_item, "current_item.id:", current_item.id, "catalog_id:", catalogID);
    let apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/catalog_display/" + catalogID + "/images/edit_all/";
    const formData = new FormData();
    let numOfImg = Object.keys(catalogImages).length;
    formData.append("num_of_files", numOfImg);
    for (let [key, val] of Object.entries(catalogImages)) {
      console.log("key:", key, "val:", val);
      formData.append("img" + key, dataURLtoFile(val, "img" + key));
    }
    for (let pair of formData.entries()) {
      console.log(pair[0] + " " + pair[1]);
    }
    axios.put(apiBaseUrl, formData).then(response => {
      // Check if internet connection was working
      if (response.status === 200) {
        if (response.data.res_code === 1) {
          console.log("EditCatalogSubmission SUCCESS");
          // window.location.reload();
          setLoading(false);
        } else {
          // Unhandled res_code
          alert("EditCatalogSubmission: Unhandled res_code");
          console.log("EditCatalogSubmission rescode:", response.data.res_code);
        }
      } else {
        // TODO handle unable to connect with database
        alert("EditCatalogSubmission: unable to connect with database");
      }
    }).catch(function (error) {
      // TODO handle error with the call
      alert("EditCatalogSubmission: Call error");
      console.log(error);
    });

    setHasCatalog(false);
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
      <CatalogDisplayModal show={showCatalogModal}
                           hide={handleCatalogClose}
                           hasCatalog={hasCatalog}
                           isLoading={isLoading}
                           setLoading={setLoading}
                           images={catalogImages}
                           setCatalog={setCatalogImages}
                           selectedItem={current_item}
                           submit={hasCatalog ? handleEditCatalogSubmit : handleAddCatalogSubmit}
      />

      <div style={{display: "flex", justifyContent: "center"}}>
        <Button onClick={handleCreateShow} buttonStyle="btn--large" buttonSize="btn--outline" buttonColor="msc_orange">
          Add an Item
        </Button>
      </div>
    </div>
  );
}
