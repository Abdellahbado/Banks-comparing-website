import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Card, Col, Row, Container } from "react-bootstrap";
import axis from "../assets/images/badr.png";
import salam from "../assets/images/unnamed.png";
import telephone from "../assets/images/telephone.png";
import mail from "../assets/images/mail.png";
import location from "../assets/images/placeholder.png";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/text.css";
import "../styles/progress.css";
import "../styles/button.css";

function Comparer(props) {
  const [bank1Conditions, setBank1Conditions] = useState(null);
  const [bank2Conditions, setBank2Conditions] = useState(null);

  const fetchData = async (id1, id2) => {
    try {
      const response = await axios.get(
        `http://localhost:3500/comparer/${id1}/${id2}`
      );
      setBank1Conditions(response.data.Banque1);
      setBank2Conditions(response.data.Banque2);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(props.banques[0].Banque_id, props.banques[1].Banque_id);
  }, []);

  if (bank1Conditions === null || bank2Conditions === null) {
    return <div>Loading...</div>;
  }
  const Info1 = {
    name: "Bank Agence Afrique Bland",
    fax: "555-1234",
    adress: "hia badr bard badr ",
    tel: "0508916850",
    image: { salam },
  };
  const Info2 = {
    name: "Bank BNP Paris alg",
    fax: "555-1234",
    adress: "belcourt",
    tel: "0558916852",
    image: { axis },
  };

  let conditions = [];

  for (let i = 0; i < bank1Conditions.length; i++) {
    let condition1 = bank1Conditions[i];
    let condition2 = bank2Conditions[i];
    if (condition1.name === condition2.name) {
      conditions.push({
        name: condition1.pres_nom,
        progress1: condition1.frais,
        progress2: condition2.frais,
      });
    }
  }

  return (
    <div>
      <Container>
        <Row xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} gap={5}>
          <Col className="mb-3 d-flex justify-content-center">
            <Card
              className="mx-1 mx-md-2 mx-lg-5 "
              style={{
                borderColor: "#0027F6",
                width: "13rem",
                marginBottom: "30px",
                backgroundColor: "rgba(0, 39, 246, 0.1)",
              }}
            >
              <Card.Img
                variant="top"
                style={{ backgroundColor: "rgba(0, 39, 246, 0.1)" }}
                src="https://mabanque.bnpparibas/rsc/contrib/script/cookielaw/consent/eca11097-be94-4209-912e-825b1c49288d/b3b62f33-0cda-42c9-88b7-620ae7e562a1/logos/static/ot_logo.jpg"
              />
              <Card.Body>
                <Card.Title
                  style={{
                    height: "85px",
                    overflow: "hidden",
                  }}
                >
                  {props.banques[0].Nom_banque}
                </Card.Title>
                <Card.Text style={{ height: "50px", overflow: "hidden" }}>
                  <img
                    className="rounded-5"
                    src={location}
                    width="30"
                    height="30"
                  />{" "}
                  {props.banques[0].Siege_social}
                </Card.Text>
                <Card.Text>
                  <img
                    className="rounded-5"
                    src={telephone}
                    width="30"
                    height="30"
                  />{" "}
                  {props.banques[0].Telephone}
                </Card.Text>
                <Card.Text>
                  <img
                    className="rounded-5"
                    src={mail}
                    width="30"
                    height="30"
                  />{" "}
                  {props.banques[0].Fax}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3 d-flex justify-content-center">
            <Card
              className="mx-1 mx-md-2 mx-lg-5 "
              style={{
                borderColor: "#0027F6",
                width: "13rem",
                marginBottom: "30px",
                backgroundColor: "rgba(0, 39, 246, 0.1)",
              }}
            >
              <Card.Img
                variant="top"
                style={{ backgroundColor: "rgba(0, 39, 246, 0.1)" }}
                src="https://mabanque.bnpparibas/rsc/contrib/script/cookielaw/consent/eca11097-be94-4209-912e-825b1c49288d/b3b62f33-0cda-42c9-88b7-620ae7e562a1/logos/static/ot_logo.jpg"
              />
              <Card.Body>
                <Card.Title
                  style={{
                    height: "100px",
                    overflow: "hidden",
                  }}
                >
                  {props.banques[1].Nom_banque}
                </Card.Title>
                <Card.Text style={{ height: "70px", overflow: "hidden" }}>
                  <img
                    className="rounded-5"
                    src={location}
                    width="30"
                    height="30"
                  />
                  {props.banques[1].Siege_social}
                </Card.Text>
                <Card.Text>
                  <img
                    className="rounded-5"
                    src={telephone}
                    width="30"
                    height="30"
                  />{" "}
                  {props.banques[1].Telephone}
                </Card.Text>
                <Card.Text>
                  <img
                    className="rounded-5"
                    src={mail}
                    width="30"
                    height="30"
                  />{" "}
                  {props.banques[1].Fax}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {conditions.map((condition, index) => {
        let bank1Color = "danger";
        let bank2Color = "danger";
        let progress1 = parseFloat(condition.progress1, 10);
        let progress2 = parseFloat(condition.progress2, 10);
        const progressDiff = condition.progress2 - condition.progress1;

        if (isNaN(progress1) || isNaN(progress2)) {
          progress1 = 15000;
          bank1Color = "dark";
          progress2 = 15000;
          bank2Color = "dark";
        } else {
          if (progress1 === 0) {
            bank1Color = "primary";
            progress1 = 15000;
            condition.progress1 = "Gratuit";
          } else if (progress1 === -1) {
            bank1Color = "secondary";
            progress1 = 15000;
            condition.progress1 = "N'existe pas";
          }
          if (progress2 === 0) {
            bank2Color = "primary ";
            progress2 = 15000;
            condition.progress2 = "Gratuit";
          } else if (progress2 === -1) {
            bank2Color = "secondary";
            progress2 = 15000;
            condition.progress2 = "N'existe pas";
          }
          if (
            condition.progress1 !== "Gratuit" &&
            condition.progress1 !== "N'existe pas" &&
            condition.progress2 !== "Gratuit" &&
            condition.progress2 !== "N'existe pas"
          ) {
            if (progressDiff === 0) {
              bank1Color = "info";
              bank2Color = "info";
            }
            if (progressDiff > 0) {
              bank2Color = "danger";
              bank1Color = "success";
            }
            if (progressDiff < 0) {
              bank2Color = "success";
              bank1Color = "danger";
            }
          }
        }
        return (
          <div className="d-flex justify-content-center" key={index}>
            <ProgressBar
              style={{
                height: "40px",
                width: "100px",
              }}
              variant={bank1Color}
              className="mb-3 justify-content-end "
              now={100}
              label={`${condition.progress1}`}
            />
            <div
              className="mb-3 text-center border-top-4"
              style={{ width: "38%" }}
            >
              <span>{condition.name}</span>
            </div>
            <ProgressBar
              className="w-40 mb-3"
              variant={bank2Color}
              style={{
                backgroundColor: "rgba(0, 39, 246, 0.1)",
                height: "40px",
                width: "100px",
              }}
              now={100}
              label={`${condition.progress2}`}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Comparer;
