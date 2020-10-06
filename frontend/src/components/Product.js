import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Card } from "antd";
import "antd/dist/antd.css";
import ProductList from "./ProductList";

const { Meta } = Card;
const toolTipMessage = "Need Help? Reach out to us!";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {toolTipMessage}
  </Tooltip>
);

const renderProducts = (props, index) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="img" src={props.img} />}
      >
        <Meta
          title={props.new + " " + props.title}
          description={
            props.date +
            " | " +
            props.school +
            " " +
            props.type +
            " | $" +
            props.price
          }
        />
        <br />
        <div className="additional">
          <p className="product-description">{props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default renderProducts;
