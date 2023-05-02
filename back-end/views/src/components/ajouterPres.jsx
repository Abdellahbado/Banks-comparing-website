import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
function AjouterPres({ showModal, setShowModal }) {
  const [nomP, setNomP] = useState("");
  const [typeP, setTypeP] = useState("");
  const handleSubmit = async () => {
    const data = { pres_nom: nomP, pres_type: typeP };
    try {
      await axios.post("http://localhost:3500", data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Veuiller entrer les informations de la nouvelle prestation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Le nom de la prestation</Form.Label>
              <Form.Control
                type="text"
                value={nomP}
                onChange={(e) => setNomP(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Le type de la prestation</Form.Label>
              <Form.Control
                type="text"
                value={typeP}
                onChange={(e) => setTypeP(e.target.value)}
              />
            </Form.Group>
          </Form>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Fermer
          </Button>
          <Button
            variant="myButtonVariant"
            onClick={handleSubmit}
            type="submit"
          >
            Filtrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AjouterPres;
