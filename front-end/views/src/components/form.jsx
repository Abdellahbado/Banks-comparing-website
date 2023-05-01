import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ModalForm({ showModal, handleClose, onSubmit }) {
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const handleSubmit = (event) => {
    // code when the form is submited
    event.preventDefault();
    onSubmit(minValue, maxValue);
    handleClose();
  };
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Veuiller entrer les deux valeurs du filtre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>La valeur min</Form.Label>
            <Form.Control
              type="number"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>La valeur max</Form.Label>
            <Form.Control
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
          </Form.Group>
        </Form>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="myButtonVariant" onClick={handleSubmit} type="submit">
          Filtrer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;
