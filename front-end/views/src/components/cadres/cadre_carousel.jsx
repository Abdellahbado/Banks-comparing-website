import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Row, Col, Container, Button } from "react-bootstrap";
import Cadre from "./cadre";

function CadreScrollable(props) {
  const banques = props.banques;

  const cardGroups = [];
  const groupSize = 6;

  for (let i = 0; i < banques.length; i += groupSize) {
    cardGroups.push(banques.slice(i, i + groupSize));
  }

  return (
    <Container >
      <Carousel interval={null}>
        {cardGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((card) => (
                <Col key={card.Banque_id} md={4}>
                  <Cadre
                    id={card.Banque_id}
                    name={card.Nom_banque}
                    adresse={card.Siege_social}
                    tel={card.Telephone}
                    fax={card.Fax}
                    img={card.Logo}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CadreScrollable;