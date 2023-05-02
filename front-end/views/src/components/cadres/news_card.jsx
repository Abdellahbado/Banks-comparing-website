import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card
      border={props.bg}
      className="m-3"
      onClick={props.onClick}
      //borderColor={props.bg}
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="text-primary"> {props.title}</Card.Title>
        <Card.Text>
          <h6 className="text-center "> Overview: {props.subTitle}</h6> <br />
          <p> {props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
