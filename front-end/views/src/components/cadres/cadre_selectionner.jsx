import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import Details from "../plus_details";
import { banqueComplet } from "../../models/plus_detail_model";
import "../../styles/button.css";
import "../../styles/card.css";

function Cadre(props) {
  return (
    <>
      <Card
        onClick={props.onClick}
        bg={props.bg}
        className="my-card mx-auto mx-md-auto mx-lg-5 "
        style={{ width: "13rem", marginBottom: "30px", marginTop: "30px" }}
      >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "100px", overflow: "hidden" }}
        />

        <Card.Body>
          <Card.Title
            style={{
              height: "100px",
              overflow: "hidden",
            }}
          >
            {props.name}
          </Card.Title>
          <Card.Text style={{ height: "70px", overflow: "hidden" }}>
            {props.adresse}
          </Card.Text>
          <Card.Text>Telephone: {props.tel}</Card.Text>
          <Card.Text>Fax: {props.fax}</Card.Text>
          <Button variant="myButtonVariant" style={{ width: "100%" }}>
            Selectionner
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cadre;
