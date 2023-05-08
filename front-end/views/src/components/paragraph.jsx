import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import myImage from "../assets/images/bank_image_paragraph.jpg";
import { Image } from "react-bootstrap";
function Paragraph() {
  const navigate = useNavigate();
  return (
    <Card
      className="mx-1 mx-md-3 mx-lg-5 my-1 my-md-3 my-lg-4"
      style={{
        minHeight: "500px",
        borderRadius: "50px",
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card.Body
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <Card.Title
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            paddingTop: "150px",
          }}
        >
          Comparer entre deux banques facilement
        </Card.Title>
        <h4 style={{ color: "#0d2059" }}>
          Comparez les offres des banques en un seul endroit pour trouver celle
          qui vous correspond le mieux.
        </h4>
        <Button
          variant="myButtonVariant"
          style={{ margin: "20px" }}
          onClick={() => navigate("/comparer")}
        >
          Comparer
        </Button>
      </Card.Body>
    </Card>
  );
}
export default Paragraph;
