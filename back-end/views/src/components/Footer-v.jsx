import React from "react";
import logo from "../assets/loggo-f.png";
import Insta from "../assets/instagram.png";
import Face from "../assets/facebook.png";
import Email from "../assets/email.png";
import { Container, Row, Col } from "react-bootstrap";
function FooterAdmin() {
  return (
    <footer
      className="p-5 "
      style={{
        height: "400px",
        backgroundColor: "#101D40",
        marginLeft: "50px",
      }}
    >
      <Container>
        <Row className="justify-content-center p-3  ">
          <Col className="text-center text-white">
            <img src={logo} width="150" height="80" />
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

export default FooterAdmin;
