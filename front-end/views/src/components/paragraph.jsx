import React from "react";
import { Card } from "react-bootstrap";
import myImage from "../assets/images/bank_image.jpg";
function Paragraph() {
  return (
    <div style={{ position: "relative" }}>
      <Card
        text="white"
        border="0"
        className="rounded rounded-lg mx-1 mx-md-3 mx-lg-5 my-1 my-md-3 my-lg-4"
        style={{
          backgroundImage: "linear-gradient(to right , #0d2059,#3b5aa9 )",
          height: "400px",
          display: "flex",
          borderRadius: "50px",
        }}
      >
        <Card.Body>
          <h2
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              marginTop: "20px",
            }}
          >
            Comparer entre banques
          </h2>
          <h2
            style={{
              marginLeft: "100px",
              marginRight: "50px",
              marginTop: "20px",
            }}
          >
            facilement
          </h2>
          <h4 style={{ margin: "40px" }}>
            Sur notre site, les utilisateurs peuvent comparer les offres des
            différentes banques en un seul endroit, ce qui leur permet de
            trouver facilement la banque qui correspond le mieux à leurs besoins
            et à leur budget.
          </h4>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Paragraph;
