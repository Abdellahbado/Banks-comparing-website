import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import "../../styles/button.css";
import axios from "axios";
import Details from "../plus_details";
import { banqueComplet } from "../../models/plus_detail_model";
import "../../styles/card.css";
import bea from "../../assets/images/bea.png";
function Cadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [data, setData] = useState(null);
  // hadi t3 plus de détails
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3500/aceuil/banque/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id) => {
    setShowOffcanvas(true);
    fetchData(id);
  };

  const handleClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <Card
        className="my-card mx-auto mx-md-auto mx-lg-5 "
        style={{
          width: "15rem",
          marginBottom: "30px",
        }}
      >
        <Card.Img variant="top" src={props.img} style={{ height: "100px", overflow:"hidden", }} />

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
            onClick={() => {
              handleClick(props.id);
            }}
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
          {data === null ? <p>Loading</p> : <Details banque={data} />}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cadre;
