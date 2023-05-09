import React, { useEffect, useState } from "react";
import axios from "axios";
import Cadre from "./cadre_admin";
import { banque } from "../models/bank_model";
import { Row, Col } from "react-bootstrap";
import PlusCadre from "./plus_cadre";
const AfficheCadres = () => {
  const [banks, setBanks] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3500/admin`);
      await setBanks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-md-auto mx-lg-5 px-md-auto px-lg-5">
        <Row className="justify-content-around">
          {banks === null ? (
            <div>Loading banks ...</div>
          ) : (
            banks.map((bank, id) => (
              <Col
                key={id}
                xs={6}
                sm={6}
                md={4}
                lg={4}
                className="d-flex text-center"
              >
                <Cadre value={bank} />
              </Col>
            ))
          )}
          {}
          <Col xs={6} sm={6} md={4} lg={4} className="d-flex text-center">
            <PlusCadre newBankID={banks === null ? 99 : banks.length + 100} />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AfficheCadres;
