import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card, Row, Col, Container, Button } from "react-bootstrap";
import Cadre from "./cadre";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

function CadreScrollable(props) {
  const banques = props.banques;

  const cardGroups = [];
  const groupSize = 6;

  for (let i = 0; i < banques.length; i += groupSize) {
    cardGroups.push(banques.slice(i, i + groupSize));
  }

  return (
    <Container style={{ minWidth: "90%", marginBottom: "40px" }}>
      <Slider
        prevArrow={<BsChevronLeft size={120} color="blue" />}
        nextArrow={<BsChevronRight size={120} color="blue" />}
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {cardGroups.map((group, index) => (
          <div key={index}>
            <Row style={{ marginLeft: "90px" }}>
              {group.map((card) => (
                <Col key={card.Banque_id} xs={12} sm={6} md={6} lg={4}>
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
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default CadreScrollable;
