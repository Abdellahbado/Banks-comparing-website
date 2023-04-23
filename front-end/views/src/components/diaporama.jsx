import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/images/bank_image.jpg";

const Diaporama = () => {
  const images = [img, img, img];

  return (
    <Container style={{ maxWidth: "800px" }}>
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