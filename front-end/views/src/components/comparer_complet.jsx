import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  Card,
  Row,
  Col,
  Container,
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasTitle,
} from "react-bootstrap";
import Cadre from "./cadres/cadre_selectionner";
import Comparer from "./Comparer";

const banques = [
  {
    name: "Bank of America",
    id: 1,
    description: "This is Bank of America",
    addresse: "789 Oak St.",
    tel: "1234567890",
    fax: "0987654321",
    img: "bank1.png",
  },
  {
    name: "Chase Bank",
    id: 2,
    description: "This is Chase Bank",
    addresse: "123 Main St.",
    tel: "2345678901",
    fax: "9876543210",
    img: "bank2.png",
  },
  {
    name: "Wells Fargo",
    id: 3,
    description: "This is Wells Fargo",
    addresse: "456 Elm St.",
    tel: "3456789012",
    fax: "8765432109",
    img: "bank3.png",
  },
  {
    name: "Citibank",
    id: 4,
    description: "This is Citibank",
    addresse: "789 Oak St.",
    tel: "4567890123",
    fax: "7654321098",
    img: "bank4.png",
  },
  {
    name: "HSBC",
    id: 5,
    description: "This is HSBC",
    addresse: "123 Main St.",
    tel: "5678901234",
    fax: "6543210987",
    img: "bank5.png",
  },
  {
    name: "Capital One",
    id: 6,
    description: "This is Capital One",
    addresse: "456 Elm St.",
    tel: "6789012345",
    fax: "5432109876",
    img: "bank6.png",
  },
  {
    name: "Bank of America",
    id: 7,
    description: "This is Bank of America",
    addresse: "789 Oak St.",
    tel: "7890123456",
    fax: "4321098765",
    img: "bank7.png",
  },
  {
    name: "Chase Bank",
    id: 8,
    description: "This is Chase Bank",
    addresse: "123 Main St.",
    tel: "8901234567",
    fax: "3210987654",
    img: "bank8.png",
  },
];

function ComparerComplet() {
  const [showComparer, setShowComparer] = useState(false);
  const [selectedCardIds, setSelectedCardIds] = useState([]);

  const handleCardClick = (id) => {
    if (selectedCardIds.includes(id) && selectedCardIds.length <= 2) {
      setSelectedCardIds(selectedCardIds.filter((cardId) => cardId !== id));
    } else {
      if (!selectedCardIds.includes(id) && selectedCardIds.length < 2) {
        setSelectedCardIds([...selectedCardIds, id]);
      }
    }
    selectedCardIds.forEach((id) => console.log(id));
  };

  function go() {
    if (selectedCardIds.length === 2) {
      console.log("starting");
    }
    setShowComparer(true);
  }
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
                      onClick={() => handleCardClick(card.id)}
                      bg={selectedCardIds.includes(card.id) ? "primary" : null}
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
      <div className="text-center">
        <Button onClick={go} style={{ marginBottom: "20px" }}>
          Comparer
        </Button>
      </div>
      <Offcanvas
        show={showComparer}
        onHide={() => {
          setShowComparer(false);
        }}
        placement="bottom"
        style={{ height: "95%" }}
      >
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Comparaison entre 2 banques</OffcanvasTitle>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Comparer />
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}

export default ComparerComplet;
