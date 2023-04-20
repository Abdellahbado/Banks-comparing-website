import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/search.png";
import loggo1 from "../assets/images/loggo1.png";
import React from "react";

function NavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="mx-5">
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
            <Nav.Link href="#Accueil" className="mx-4">
              Accueil{" "}
            </Nav.Link>
            <Nav.Link href="#Comparer" className="mx-4">
              Comparer
            </Nav.Link>
            <Nav.Link href="#Qui-sommes-nous" className="mx-4">
              Qui-sommes-nous
            </Nav.Link>
          </Nav>
          <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              placeholder="Recherche une banque"
              className="me-0 form-control-lg border-0 outline-0"
              aria-label="Search"
            />
            <Button variant="white" size="sm">
              <img src={logo} width="20" height="20" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
