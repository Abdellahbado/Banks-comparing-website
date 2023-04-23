import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Offcanvas } from "react-bootstrap";
import "../../styles/button.css";
import axios from "axios";
import Details from "../plus_details";
const bank = {
  name: "American Bank",
  id: "jbdbi",
  openingTime: 8.3,
  closingTime: 17,
  descriptions: [
    "  Banque Américaine est une institution financière de premier plan avec une longue histoire de service à la communauté.",
    "Chez Banque Américaine, nous nous engageons à fournir des services bancaires exceptionnels adaptés aux besoins de nos clients.",
    "Avec une large gamme de produits et services, Banque Américaine offre des solutions financières complètes pour les particuliers et les entreprises.",
    "En tant que banque de confiance, Banque Américaine propose des services bancaires fiables et sécurisés pour aider les clients à atteindre leurs objectifs financiers.",
    "Chez Banque Américaine, nous sommes fiers de notre excellent service client et de nos solutions bancaires innovantes.",
    "Avec une équipe de professionnels expérimentés, Banque Américaine est dévouée à aider nos clients à réussir financièrement.",
    "Banque Américaine est un partenaire de confiance dans la gestion de vos finances, offrant des solutions personnalisées pour répondre à vos besoins uniques.",
    "Chez Banque Américaine, nous nous efforçons de fournir une valeur exceptionnelle à nos clients grâce à nos services bancaires complets et à nos tarifs compétitifs.",
  ],
  prestations: [
    { name: "Pres 1", price: 50 },
    { name: "Pres 2", price: 75 },
    { name: "Pres 3", price: 100 },
    { name: "Pres 4", price: 120 },
    { name: "Pres 5", price: 90 },
  ],
};
function Cadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [data, setData] = useState(null);
  // haid t3 plus de détails
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`
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
  }, [Offcanvas]);
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
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.adresse}</Card.Text>
          <Card.Text>Telephone: {props.tel}</Card.Text>
          <Card.Text>Fax: {props.fax}</Card.Text>
          <Button
            variant="myButtonVariant"
            style={{ width: "100%" }}
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
            {props.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          The Offcanvas was displayed from {props.id} the bank
          <Details banque={bank} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cadre;
//className="d-flex flex-column"
