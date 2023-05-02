import React, { useEffect, useState } from "react";
import axios from "axios";
import Cadre from "./cadre_admin";
import { banque } from "../models/bank_model";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import PlusCadre from "./plus_cadre";
import { BsPlus } from "react-icons/bs";

import "../styles/button.css";

const AfficheCadres = () => {
  let banks;
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/aceuil`);
      banks = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="mx-md-auto mx-lg-5 px-md-auto px-lg-5 ml-3"
        style={{ marginLeft: "50px" }}
      >
        <Row className="justify-content-around">
          {banque.map((bank, id) => (
            <Col
              key={id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className="d-flex text-center"
            >
              <Cadre value={bank} />
            </Col>
          ))}
          <Col className="d-flex text-center">
            <PlusCadre newBankID={99} />
          </Col>
          <Button
            variant="myButtonVariant"
            className="justify-content"
            style={{ maxWidth: "200px", marginBottom: "30px" }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Ajouter Prestation
            <BsPlus size={60} />
          </Button>
        </Row>

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
      </div>
    </>
  );
};
export default AfficheCadres;
