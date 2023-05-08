import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Container,
  Button,
  Offcanvas,
  OffcanvasTitle,
  Modal,
} from "react-bootstrap";
import Cadre from "./cadres/cadre_selectionner";
import Comparer from "./Comparer";
import "../styles/button.css";
import axios from "axios";

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
  const [banks, setBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/aceuil");
      setBanks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const banques = banks;
  const [showComparer, setShowComparer] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);

  const handleCardClick = (card) => {
    if (selectedCard.includes(card) && selectedCard.length <= 2) {
      setSelectedCard(selectedCard.filter((cardd) => cardd.id !== card.id));
    } else {
      if (!selectedCard.includes(card) && selectedCard.length < 2) {
        setSelectedCard([...selectedCard, card]);
      }
    }
    selectedCard.forEach((card) => console.log(card.id));
  };

  function go() {
    if (selectedCard.length === 2) {
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
      <Slider
        prevArrow={<BsChevronLeft size={120} color="blue" />}
        nextArrow={<BsChevronRight size={120} color="blue" />}
        dots={true}
        infinite={true}
        slidesToShow={1}
      >
        {cardGroups.map((group, index) => (
          <div key={index}>
            <Container>
              <Row>
                {group.map((card, index) => (
                  <Col key={index} md={4}>
                    <Cadre
                      id={card.Banque_id}
                      onClick={() => handleCardClick(card)}
                      bg={selectedCard.includes(card) ? "primary" : null}
                      name={card.Nom_banque}
                      adresse={card.Siege_social}
                      tel={card.Telephone}
                      fax={card.Fax}
                      img={card.Logo}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        ))}
      </Slider>

      <div className="text-center">
        <Button
          onClick={go}
          style={{ marginBottom: "20px", marginTop: "50px" }}
          variant="myButtonVariant"
        >
          Comparer
        </Button>
      </div>
      <Modal
        show={showComparer}
        onHide={() => {
          setShowComparer(false);
        }}
        placement="bottom"
        style={{ height: "95%" }}
        dialogClassName="modal-lg" // Add this line
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <Comparer banques={selectedCard} />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </Container>
  );
}

export default ComparerComplet;
