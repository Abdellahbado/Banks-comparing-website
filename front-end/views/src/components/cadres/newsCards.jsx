import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card className="mb-3" onClick={props.onClick} bg={props.bg} style={{borderColor:"#0027F6"}}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>
          <h6 className="text-center"> Overview: {props.subTitle}</h6> <br />
          <p> {props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
