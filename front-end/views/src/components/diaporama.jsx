import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/images/bank1.jpg";
import img2 from "../assets/images/bank2.jpg";
import img3 from "../assets/images/bank3.jpg";

const Diaporama = () => {
  const images = [img1, img2, img3];

  return (
    <Container
      style={{
        width: "100%",
      }}
    >
      <Carousel interval={3000} controls indicators>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Diaporama;