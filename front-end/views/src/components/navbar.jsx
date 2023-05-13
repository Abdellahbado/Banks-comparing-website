import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import logo from "../assets/images/search.png";
import loggo1 from "../assets/images/loggo1.png";
import React from "react";
import { useLocation } from "react-router-dom";

function NavBar(props) {
  const location = useLocation();

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
            <Nav.Link
              as={Link}
              to="/"
              className="mx-4"
              activeClassName="text-primary"
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/comparer"
              className="mx-4"
              activeClassName="text-primary"
            >
              Comparer
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/news"
              className="mx-4"
              activeClassName="text-primary"
            >
              News
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/qui-sommes-nous"
              className="mx-4"
              activeClassName="text-primary"
            >
              Qui-sommes-nous
            </Nav.Link>
          </Nav>
          <Link to="/">
            <Button
              variant="outline-secondary"
              onClick={props.onSearchClick}
              style={{ marginRight: "100px" }}
            >
              <img src={logo} width="20" height="20" />
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
