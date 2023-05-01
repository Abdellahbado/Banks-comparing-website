import React, { useState } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import "../styles/button.css";
import "../styles/button-red.css";
import axios from "axios";
import FormComponent from "./Form";
function Cadre(props) {
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost/admin/${id}`);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
    // la suppression se fait ici
    setShowModal(false);
  };
  const handleClickModifier = (id) => {
    setShowOffcanvas(true);
    //fetchData(id);
  };
  const submitModifier = async (id) => {
    // const data hadi resultat t3 modification
    let data;
    try {
      const response = await axios.post(`http://localhost/admin/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
      });
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Card
        className="mx-1 mx-md-3 mx-lg-5 flex-fill"
        style={{
          width: "18rem",
          marginBottom: "30px",
          maxWidth: "350px",
          minWidth: "200px",
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
            {props.value.Nom_banque}
          </Card.Title>
          <Card.Text style={{ height: "70px", overflow: "hidden" }}>
            {props.value.Siege_social}
          </Card.Text>
          <Card.Text>Telephone: {props.value.Telephone}</Card.Text>
          <Card.Text>Fax: {props.value.Fax}</Card.Text>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="myButtonVariant"
              style={{ width: "46%" }}
              onClick={() => {
                handleClickModifier(props.value.Banque_id);
              }}
            >
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
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmer la suppression
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de bien vouloir supprimer {props.value.Nom_banque}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button
            variant="myRedVariant"
            onClick={() => {
              handleDelete(props.value.Banque_id);
            }}
          >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showOffcanvas}
        onHide={() => {
          setShowOffcanvas(false);
        }}
        dialogClassName="modal-w" //placement="bottom"
        //style={{ width: "100vw" }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Modification des prestations de la banque {props.value.Nom_banque}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent id={props.value.Banque_id} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cadre;
// header style={{ textAlign: "center", width: "100%" }}
