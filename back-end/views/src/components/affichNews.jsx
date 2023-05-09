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

function AffichNews() {
  const [showModal, setShowModal] = useState(false);
  const [showModalModifier, setShowModalModifier] = useState(false);
  const [showModalSupprimer, setShowModalSupprimer] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [IndexSupp, setIndexSupp] = useState(0);
  const [news, setNews] = useState([]);
  const fetchNewsTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3500/admin/news/titres"
      );
      setNews(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchNewsTitles();
  }, []);

  const [nomP, setNomP] = useState("");
  const [typeP, setTypeP] = useState("");
  // the call for this in the modal gotta change
  const handleSubmit = async (id) => {
    const data = {
      news_title: title,
      news_subtitle: subtitle,
      news_body: body,
    };
    try {
      await axios.post(`http://localhost:3500/admin/news/${id} `, data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    const data = { news_nom: nomP, news_type: typeP };
    console.log(nomP + " " + typeP);
    try {
      await axios.delete(`http://localhost:3500/admin/news/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickModifier = (id) => {
    setShowModalModifier(true);
  };

  return (
    <div style={{ marginLeft: "50px" }}>
      <Card
        className="mx-1 mx-md-3 mx-lg-5 my-1 my-md-3 my-lg-4"
        style={{
          minHeight: "500px",
          borderRadius: "50px",
          background: "linear-gradient(to right, #0d2059, #1f3294)",
          marginLeft: "50px",
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
            Ajouter/modifier/supprimer un news
          </Card.Title>
          <h4 style={{ color: "white" }}>
            Ajouter une newstation ou supprimer une déja existane pour toutes
            les banques
          </h4>
        </Card.Body>
      </Card>
      <Container
        fluid
        className="d-flex align-items-center "
        style={{ height: "500px" }}
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
              Ajouter News
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="myButtonVariant"
                className="rounded-pill"
                style={{ fontSize: "30px", padding: "15px", margin: "20px" }}
                block
              >
                <FaTrash style={{ marginRight: "20px" }} />
                Modifier News
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ maxHeight: "400px", overflowY: "auto" }}
                variant="custom"
              >
                {news.length === 0 ? (
                  <Dropdown.Item>
                    <p>Loading prestations</p>
                  </Dropdown.Item>
                ) : (
                  news.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={item}
                      onClick={() => handleClickModifier(item.id)}
                    >
                      {item.news_titres}
                    </Dropdown.Item>
                  ))
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="myRedVariant"
                className="rounded-pill"
                style={{ fontSize: "30px", padding: "15px", margin: "20px" }}
                block
              >
                <FaTrash style={{ marginRight: "20px" }} />
                Supprimer News
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{ maxHeight: "400px", overflowY: "auto" }}
                variant="custom"
              >
                {news.length === 0 ? (
                  <Dropdown.Item>
                    <p>Loading prestations</p>
                  </Dropdown.Item>
                ) : (
                  news.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={item}
                      onClick={() => {
                        setIndexSupp(index);
                        setShowModalSupprimer(true);
                      }}
                    >
                      {item.news_titres}
                    </Dropdown.Item>
                  ))
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
      {/*modal for ajouter news */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Veuiller entrer les informations de la nouvelle news
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>News Titre</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>News Sous-titre</Form.Label>
              <Form.Control
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>News Corps</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>News Image URL</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
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
      {/* this is modal for modofier*/}
      <Modal
        show={showModalModifier}
        onHide={() => setShowModalModifier(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Veuiller entrer les nouvelles informations de la news
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nouveau Titre</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nouveau Sous-titre</Form.Label>
              <Form.Control
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nouveau Corps</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nouvelle Image URL</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowModalModifier(false);
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
      {/*modal of supprimer */}
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
        <Modal.Body>
          {news.length === 0 ? (
            <div>Aucune nouvelle disponible.</div>
          ) : (
            <div>
              Êtes-vous sûr de bien vouloir supprimer{" "}
              {news[IndexSupp].news_titres}?
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowModalSupprimer(false)}
          >
            Annuler
          </Button>
          <Button
            variant="myRedVariant"
            disabled={news.length === 0}
            onClick={() => {
              handleDelete(news[IndexSupp].news_id);
            }}
          >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AffichNews;
