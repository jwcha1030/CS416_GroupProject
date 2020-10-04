import React from "react";
import "./Member.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
import PopoverContent from "react-bootstrap/PopoverContent";
import PopoverTitle from "react-bootstrap/PopoverTitle";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Click & Copy to Clipboard
  </Tooltip>
);

const renderMembers = (item, index) => {
  return (
    <div>
      <Card className="member">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title className="title">{item.name}</Card.Title>
          <Card.Subtitle className="subtitle mb-1 text-muted">
            {item.position}
          </Card.Subtitle>
          <p class="card-text">
            <medium class="text-muted">{item.date}</medium>
          </p>
          <Card.Text className="description">{item.description}</Card.Text>

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button
              className="contact-button"
              onClick={() => navigator.clipboard.writeText(item.contact)}
              variant="dark"
            >
              {item.contact}
            </Button>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </div>
  );
};

export default renderMembers;
