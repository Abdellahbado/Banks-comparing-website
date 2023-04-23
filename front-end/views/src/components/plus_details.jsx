import React from "react";
import Map from "./map";
import { Table } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";
import "../styles/plus_details_style.css";
function Details({ banque }) {
  const bank = banque;

  const bankOpeningTime = bank.openingTime;
  const bankClosingTime = bank.closingTime;
  const currentHour = new Date().getHours();

  const isBankOpen =
    currentHour >= bankOpeningTime && currentHour < bankClosingTime;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">{bank.name}</h1>

            <Map lat={36.1849} lng={2.4194} />

            {isBankOpen ? (
              <h6 style={{ color: "green" }}>
                La banque est ouverte maintenant
              </h6>
            ) : (
              <h6 style={{ color: "red" }}>La banque est fermée maintenant</h6>
            )}

            <p>{bank.descriptions}</p>
            <h4>Voici quelques prestations:</h4>
            <Table
              responsive
              striped
              bordered
              hover
              className=" table text-center "
            >
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {bank.prestations.map((prestation) => (
                  <tr key={prestation.id} className="hover">
                    <td>{prestation.name}</td>
                    <td>{prestation.price} DA</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <footer className="footer" style={{ padding: "20px", marginTop: "20px" }}>
        <Container>
          <Row>
            <Col md={3} className="text-center">
              <a
                href="https://www.facebook.com/americanbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} style={{ color: "#3b5998" }} />
              </a>
            </Col>
            <Col md={3} className="text-center">
              <a
                href="https://twitter.com/americanbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} style={{ color: "#1da1f2" }} />
              </a>
            </Col>
            <Col md={3} className="text-center">
              <a
                href="https://www.instagram.com/americanbank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} style={{ color: "#c13584" }} />
              </a>
            </Col>
            <Col md={3} className="text-center">
              <FaPhone size={24} style={{ color: "#212529" }} />
              <span style={{ marginLeft: "5px" }}>1-800-123-4567</span>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-3">
              <p style={{ margin: "0" }}>American Bank. All rights reserved.</p>
              <p style={{ margin: "0" }}>1234 Main St, New York, NY 10001</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Details;
