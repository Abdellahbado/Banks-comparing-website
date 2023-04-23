import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import "../../styles/button.css";
// const primaryColor = "#1F3294";
// const secondaryColor = "#85EC55";
function PlusCadre() {
  return (
    <Card
      className="mx-auto mx-md-auto mx-lg-5 "
      style={{ width: "18rem", marginBottom: "30px" }}
    >
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="myVariant" className="h-md-100 h-lg-50 w-50">
          <BsPlus size={120} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PlusCadre;