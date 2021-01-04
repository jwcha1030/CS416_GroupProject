import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import LOADER_GIF from "../../../../images/loading.gif";

export default function CatalogDisplayModal(props) {

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
            <Modal.Title>Add 360View Catalog Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
        </div>
        :
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Edit 360°View Catalog Images</Modal.Title>
          </Modal.Header>
          < Modal.Body>
          </Modal.Body>
        </div>
      }
    </Modal>
  );
}