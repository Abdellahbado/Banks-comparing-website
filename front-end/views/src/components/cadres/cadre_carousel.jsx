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
    <Container>
      <Carousel interval={null}>
        {cardGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row>
                {group.map((card, index) => (
                  <Col key={index} md={4}>
                    <Cadre
                      id={card.id}
                      name={card.name}
                      adresse={card.adresse}
                      tel={card.tel}
                      fax={card.fax}
                      img={card.img}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CadreScrollable;
