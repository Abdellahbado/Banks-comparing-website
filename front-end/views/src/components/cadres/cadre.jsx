import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import "../../styles/button.css";
import axios from "axios";
import Details from "../plus_details";
import { banqueComplet } from "../../models/plus_detail_model";

function Cadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [data, setData] = useState(null);
  // hadi t3 plus de détails
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/aceuil/${id}`);

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
        className="mx-1 mx-md-2 mx-lg-5 "
        style={{
          width: "13rem",
          marginBottom: "30px",
          // marginLeft: props.id % 3 === 0 ? "50px" : "",
          // marginRight: props.id % 3 === 2 ? "50px" : "",
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
