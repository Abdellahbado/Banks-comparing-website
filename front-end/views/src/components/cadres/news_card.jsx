import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card border={props.bg} className="m-3" onClick={props.onClick}>
      <div
        style={{
          maxHeight: "800px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img variant="top" src={props.img} fluid />
      </div>
      <Card.Body className="p-2">
        <Card.Title className="text-primary h6 mb-1">{props.title}</Card.Title>
        <Card.Text className="small">
          <span className="font-weight-bold">Overview:</span> {props.subTitle}
        </Card.Text>
        <Card.Text className="font-weight-normal">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
