import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, Modal } from "react-bootstrap";
import "../../styles/button.css";
import "../../styles/button-red.css";
function Cadre(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // la suppression se fait ici
    setShowModal(false);
  };
  return (
    <>
      <Card
        className="mx-auto mx-md-auto mx-lg-5 "
        style={{ width: "18rem", marginBottom: "30px" }}
      >
        <Card.Img
          variant="top"
          src="https://mabanque.bnpparibas/rsc/contrib/script/cookielaw/consent/eca11097-be94-4209-912e-825b1c49288d/b3b62f33-0cda-42c9-88b7-620ae7e562a1/logos/static/ot_logo.jpg"
        />
        <Card.Body>
          <Card.Title>{props.value.name}</Card.Title>
          <Card.Text>{props.value.adresse}</Card.Text>
          <Card.Text>Telephone: {props.value.tel}</Card.Text>
          <Card.Text>Fax: {props.value.fax}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="myButtonVariant" style={{ width: "46%" }}>
              Modifier
            </Button>
            <Button
              variant="myRedVariant"
              style={{ width: "46%" }}
              onClick={() => setShowModal(true)}
            >
              Supprimer
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de bien vouloir supprimer {props.value.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button variant="myRedVariant" onClick={handleDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cadre;