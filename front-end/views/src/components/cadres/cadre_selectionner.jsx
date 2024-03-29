import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import Details from "../plus_details";
import { banqueComplet } from "../../models/plus_detail_model";
import "../../styles/button.css";

function Cadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [data, setData] = useState(null);
  // hada exemple bach nseyi kifch ndiro api
  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.id}`
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Card
        onClick={props.onClick}
        bg={props.bg}
        className="mx-auto mx-md-auto mx-lg-5 "
        style={{ width: "13rem", marginBottom: "30px", marginTop: "30px" }}
      >
        <Card.Img
          variant="top"
          src="https://mabanque.bnpparibas/rsc/contrib/script/cookielaw/consent/eca11097-be94-4209-912e-825b1c49288d/b3b62f33-0cda-42c9-88b7-620ae7e562a1/logos/static/ot_logo.jpg"
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