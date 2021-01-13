import React from 'react';
import Modal from "react-bootstrap/Modal";
import LOADER_GIF from "../../../../images/loading.gif";
import MultiImageInput from 'react-multiple-image-input';
import {Button} from "../../../../components/button/Button";

export default function CatalogDisplayModal(props) {
  const titleStyle={
    fontSize: 15,
  };
  const headerStyle={
    margin:0,
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    position:'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  };
  return (
    <Modal size='lg' centered={true} animation={false} show={props.show} onHide={props.hide}>
      {props.isLoading ?
        <Modal.Body>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
            src={LOADER_GIF}
          />
        </Modal.Body> :
        //if there are catalog images show edit modal. If not, show add modal
        props.hasCatalog ?
          <div>
            <Modal.Header closeButton>
              <Modal.Title style={headerStyle}>Edit 360°View Catalog Images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={titleStyle}>Please select images(Max 60):</p>
              <MultiImageInput
                images={props.images}
                setImages={props.setCatalog}
                allowCrop={false}
                handleError={() => alert("Image Upload Failed: Max 60 images allowed")}
                theme={"light"}
                max={60}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.hide} buttonColor="msc_orange_invert"
                      buttonSize="btn--medium">Close</Button>
              <Button onClick={props.submit} buttonColor="msc_orange" buttonSize="btn--medium">
                Submit
              </Button>
            </Modal.Footer>
          </div>
          :
          <div>
            <Modal.Header closeButton>
              <Modal.Title style={headerStyle}>Add 360°View Catalog Images</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={titleStyle}>Please select images(Max 60):</p>
              <MultiImageInput
                images={props.images}
                setImages={props.setCatalog}
                allowCrop={false}
                handleError={() => alert("Image Upload Failed: Max 50 images allowed")}
                theme={"light"}
                max={60}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.hide} buttonColor="msc_orange_invert"
                      buttonSize="btn--medium">Close</Button>
              <Button onClick={props.submit} buttonColor="msc_orange" buttonSize="btn--medium">
                Submit
              </Button>
            </Modal.Footer>
          </div>
      }
    </Modal>
  );
}