import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  Row,
  Col,
  Container,
  Button,
  Offcanvas,
  OffcanvasTitle,
} from "react-bootstrap";
import Cadre from "./cadres/cadre_selectionner";
import Comparer from "./Comparer";
import axios from "axios";

function ComparerComplet(props) {
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
  const [selectedBanks, setSelectedBanks] = useState({});

  function go() {
    if (selectedCardIds.length === 2) {
      console.log("starting");
      setSelectedBanks(
        banques.filter((bank) => selectedCardIds.includes(bank.id))
      );
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
      {isLoading ? (
        <div>Loading banks...</div>
      ) : banks.length === 0 ? (
        <div>No banks found!</div>
      ) : (
        <>
          <Carousel interval={null}>
            {cardGroups.map((group, index) => (
              <Carousel.Item key={index}>
                <Container>
                  <Row>
                    {group.map((card, index) => (
                      <Col key={index} md={4}>
                        <Cadre
                          id={card.Banque_id}
                          onClick={() => handleCardClick(card.Banque_id)}
                          bg={
                            selectedCardIds.includes(card.Banque_id)
                              ? "primary"
                              : null
                          }
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
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="text-center">
            <Button
              variant="myButtonVariant"
              onClick={go}
              style={{ marginBottom: "20px" }}
            >
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
            <Offcanvas.Body style={{backgroundColor:""}}>
              <Comparer banques={selectedCardIds} banksInfo={selectedBanks} />
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </Container>
  );
}

export default ComparerComplet;
