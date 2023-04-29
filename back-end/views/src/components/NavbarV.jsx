import React from "react";
import { Container, Navbar } from "react-bootstrap";
import loggo1 from "../assets/loggo1.png";
const NavBarAdmin = function () {
  return (
    <Navbar
      className="mb-3 "
      style={{ backgroundColor: "rgba(0, 39, 246, 0.1)" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            src={loggo1}
            width="128"
            height="53"
            className="d-inline-block align-top "
            alt="Banki"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarAdmin;
