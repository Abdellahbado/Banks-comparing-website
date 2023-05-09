import React, { useState } from "react";
import { Card, Button, Offcanvas } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import "../styles/button.css";
import FormComponentBanque from "./form_banque";
import axios from "axios";
// const primaryColor = "#1F3294";
// const secondaryColor = "#85EC55";
function PlusCadre(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const submitAjouter = async (id) => {
    // const data hadi resultat t3 modification
    let data;
    try {
      const response = await axios.post(`http://localhost/admin/${id}`, data);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Card
        className="mx-auto mx-lg-5 flex-fill"
        style={{
          width: "18rem",
          marginBottom: "30px",
          maxWidth: "350px",
          minWidth: "200px",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="myButtonVariant"
            className="h-md-100 h-lg-50 w-50 d-flex justify-content-center"
            onClick={() => {
              setShowOffcanvas(true);
            }}
          >
            <BsPlus size={120} />
          </Button>
        </Card.Body>
      </Card>
      <Offcanvas
        show={showOffcanvas}
        onHide={() => {
          setShowOffcanvas(false);
        }}
        placement="bottom"
        style={{ height: "95%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ textAlign: "center", width: "100%" }}>
            Ajout d'une nouvelle banque
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormComponentBanque id={props.newBankID} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PlusCadre;
