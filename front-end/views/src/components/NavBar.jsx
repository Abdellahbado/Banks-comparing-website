import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import logo from "../assets/images/search.png";
import loggo1 from "../assets/images/loggo1.png";
import React from "react";

function NavBar(props) {
  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      style={{ display: "flex", justifyContent: "space-evenly " }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="mx-5">
          {" "}
          {/* Use the Link component for the Navbar.Brand */}
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
              {" "}
              Accueil{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/comparer" className="mx-4">
              {" "}
              Comparer
            </Nav.Link>
            <Nav.Link as={Link} to="/qui-sommes-nous" className="mx-4">
              {" "}
              Qui-sommes-nous
            </Nav.Link>
          </Nav>
          <Button variant="outline-secondary" onClick={props.onSearchClick}>
            <img src={logo} width="20" height="20" />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
