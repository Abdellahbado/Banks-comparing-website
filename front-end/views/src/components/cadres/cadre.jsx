import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import "../../styles/button.css";
import axios from "axios";
import Details from "../plus_details";
import { banqueComplet } from "../../models/plus_detail_model";

function Cadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [data, setData] = useState(null);
  // haid t3 plus de détails
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://56cc-105-98-44-89.ngrok-free.app/aceuil/${props.id + 100}`
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setShowOffcanvas(true);
  };

  const handleClose = () => {
    setShowOffcanvas(false);
  };
  const buttonStyle = {
    width: "100%",
    backgroundColor: "#1F3294",
    color: "white",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "white",
    },
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Card
        className="mx-auto mx-md-auto mx-lg-5 "
        style={{
          width: "13rem",
          marginBottom: "30px",
        }}
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
          <Button
            variant="myButtonVariant"
            style={{
              width: "100%",
            }}
            onClick={handleClick}
          >
            Plus de détails
          </Button>
        </Card.Body>
      </Card>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="bottom"
        style={{ height: "95%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ textAlign: "center", width: "100%" }}>
            {props.Nom_banque}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          The Offcanvas was displayed from {props.id} the bank
          <Details banque={data === null ? banqueComplet : data} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cadre;
//className="d-flex flex-column"
