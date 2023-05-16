import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Card,
  Dropdown,
} from "react-bootstrap";
import "../styles/button.css";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import "../styles/button-red.css";
import axios from "axios";
import "../styles/dropdown.css";

function AffichPres() {
  const [showModal, setShowModal] = useState(false);
  const [nomP, setNomP] = useState("");
  const [typeP, setTypeP] = useState("");
  const [showModalSupprimer, setShowModalSupprimer] = useState(false);

  const [prest, setPrest] = useState([]);
  const fetchPres = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3500/admin/prestations/101"
      );
      await setPrest(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchPres();
  }, []);
  const handleSubmit = async () => {
    const data = { pres_nom: nomP, pres_type: typeP };
    console.log(nomP + " " + typeP);
    try {
      await axios.post("http://localhost:3500/admin/prestations/00", data);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };
  const [selectedItem, setSelectedItem] = useState(0);
  const handleDropdownSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const handleDelete = async (id) => {
    const data = { pres_nom: nomP, pres_type: typeP };
    try {
      await axios.delete(`http://localhost:3500/admin/prestations/${id}`, data);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <Card
        className="mx-1 mx-md-3 mx-lg-5 my-1 my-md-3 my-lg-4"
        style={{
          minHeight: "500px",
          borderRadius: "50px",
          background: "linear-gradient(to right, #0d2059, #1f3294)",
        }}
      >
        <Card.Body
          style={{
            textAlign: "center",
          }}
        >
          <Card.Title
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              paddingTop: "150px",
              color: "white",
            }}
          >
            Ajouter/supprimer une prestation
          </Card.Title>
          <h4 style={{ color: "white" }}>
            Ajouter une prestation ou supprimer une déja existane pour toutes
            les banques
          </h4>
        </Card.Body>
      </Card>
      <Container
        fluid
        className="d-flex align-items-center "
        style={{ height: "300px" }}
      >
        <Row className="w-100 justify-content-center">
          <Col xs={6} className="text-center">
            <Button
              variant="myButtonVariant"
              block
              className="rounded-pill"
              style={{ fontSize: "30px", padding: "15px", margin: "20px" }}
              onClick={() => setShowModal(true)}
            >
              <FaPlusCircle style={{ marginRight: "20px" }} />
              Ajouter Prestation
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="myRedVariant"
                className="rounded-pill"
                style={{ fontSize: "30px", padding: "15px", margin: "20px" }}
                block
              >
                <FaTrash style={{ marginRight: "20px" }} />
                Supprimer Prestation
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ maxHeight: "400px", overflowY: "auto" }}
                variant="custom"
              >
                {prest.length === 0 ? (
                  <Dropdown.Item>
                    <p>Chargement des prestations...</p>
                  </Dropdown.Item>
                ) : (
                  prest.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={item}
                      onClick={() => {
                        setSelectedItem(item.pres_id);
                        setShowModalSupprimer(true);
                      }}
                    >
                      {item.pres_nom}
                    </Dropdown.Item>
                  ))
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
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
            Soumettre
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showModalSupprimer}
        onHide={() => setShowModalSupprimer(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmer la suppression
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Êtes-vous sûr de bien vouloir supprimer?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModalSupprimer(false)}
          >
            Annuler
          </Button>
          <Button
            variant="myRedVariant"
            onClick={() => {
              handleDelete(selectedItem);
            }}
          >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AffichPres;
