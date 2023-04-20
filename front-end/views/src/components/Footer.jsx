import React from "react";
import logo from "../assets/images/loggo-f.png";
import Insta from "../assets/images/instagram.png";
import Face from "../assets/images/facebook.png";
import Email from "../assets/images/email.png";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer
      // className="p-5"
      style={{ height: "400px", backgroundColor: "#0d2059" }}
    >
      <Container>
        <Row className="justify-content-center p-3  ">
          <Col className="text-center text-white">
            <img src={logo} width="150" height="80" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center text-white">
            <a href="#Accueil" className="text-white">
              Rechercher
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center text-white">
            <a href="#Comparer" className="text-white">
              Comparer
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center text-white">
            <a href="#Qui-somme-nous" className="text-white">
              Qui-somme-nous
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center py-3">
            <img
              className="bg-white mx-3 rounded-5"
              src={Email}
              width="43"
              height="43"
            />
            <img
              className="bg-white mx-3 rounded-5"
              src={Face}
              width="45"
              height="45"
            />
            <img
              className="bg-white mx-3 rounded-5 "
              src={Insta}
              width="43"
              height="43"
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center text-white py-3">
            <p>
              &copy;{new Date().getFullYear()} Banki App - Tous les droits sont
              reservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
