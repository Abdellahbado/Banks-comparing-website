import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/images/bank_image.jpg";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Diaporama = () => {
  const images = [img, img, img];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container style={{ width: "100%", }}>
      <Slider
        {...settings}
        prevArrow={<BsChevronLeft size={120} color="blue" />}
        nextArrow={<BsChevronRight size={120} color="blue" />}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src="https://marvel-b1-cdn.bc0a.com/f00000000164524/www.prosperitybankusa.com/ContentImageHandler.ashx?ImageId=179404"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Diaporama;
