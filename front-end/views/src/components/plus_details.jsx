import React from "react";
import { useState } from "react";
import Map from "./map";
import { Table } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";
import "../styles/plus_details_style.css";

function Details({ banque }) {
  const bank = banque;

  //   const bankOpeningTime = bank.Banque.openingTime;
  //   const bankClosingTime = bank.Banque.closingTime;
  //   const currentHour = new Date().getHours();

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">{bank.Banque.Nom_banque}</h1>
            <div>
              <iframe
                src={bank.Banque.Localisation}
                width="1200"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {<p>{bank.Banque.descriptions}</p>}
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
                  <th>Type</th>
                  <th>Nom</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {bank.Prestation.map((prestation) => (
                  <tr key={prestation.pres_id} className="hover">
                    <td>{prestation.pres_type}</td>
                    <td>{prestation.pres_nom}</td>
                    <td>{prestation.frais} DA</td>
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
              <p style={{ margin: "0" }}>Banki. All rights reserved.</p>
              <p style={{ margin: "0" }}>Oued Smar, Algeria</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Details;
