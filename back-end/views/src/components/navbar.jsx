import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import loggo1 from "../assets/loggo1.png";
import React from "react";

function NavBar({ showModal, setShowModal }) {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg="white"
      style={{
        display: "flex",
        justifyContent: "space-evenly ",
      }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mx-5">
          {" "}
          <img
            src={loggo1}
            width="128"
            height="53"
            className="d-inline-block align-top "
            alt="Banki"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
            variant="tabs"
          >
            <Nav.Link as={Link} to="/" className="mx-4">
              Banks
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/news"
              className="mx-4"
              onClick={setShowModal(true)}
            >
              Prestations
            </Nav.Link>
            <Nav.Link as={Link} to="/news" className="mx-4">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
