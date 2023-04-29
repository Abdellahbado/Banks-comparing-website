import React, { useEffect } from "react";
import axios from "axios";
import Cadre from "./cadre_admin";
import { banque } from "../models/bank_model";
import { Row, Col } from "react-bootstrap";
import PlusCadre from "./plus_cadre";
const AfficheCadres = () => {
  let banks = null;
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/aceuil`);
      banks = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <div className="mx-md-auto mx-lg-5 px-md-auto px-lg-5">
        <Row>
          {banque.map((bank, id) => (
            <Col key={id} xs={12} sm={6} md={3} lg={4} className="d-flex">
              <Cadre value={bank} />
            </Col>
          ))}
          <Col className="d-flex">
            <PlusCadre />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AfficheCadres;
