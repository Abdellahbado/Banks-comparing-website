import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from "react-bootstrap";
import NewsCard from "./newsCards";
import { useState } from "react";

function MySlider() {
  const items = [
    {
      img: "vjhs",
      title: "Bank XYZ ",
      id: "1",

      subTitle: " Bank XYZ has recently launched a item credit card product  ",
      description: [
        "Offering generous rewards and benefits for those who frequently fly or stay at hotels.",
        "The card, which comes with a competitive interest rate, offers rewards such as airline miles, hotel loyalty points, and cashback on purchases made with the card.",
        "In addition, cardholders receive exclusive perks such as access to airport lounges, complimentary travel insurance, and 24/7 concierge service.",
        'We understand that frequent travelers have unique needs when it comes to their financial products, and we are proud to offer a credit card that caters to those needs," said Jane Doe, CEO of Bank XYZ. "With this card, our customers can enjoy a range of benefits and rewards that make traveling more enjoyable and affordable."',
        "To promote the launch of the card, Bank XYZ is offering a limited-time sign-up bonus of 50,000 airline miles or hotel loyalty points to item cardholders who spend $3,000 or more in the first three months.",
        '"We are confident that this offer will be attractive to frequent travelers who are looking for a credit card that offers valuable rewards and benefits," added Doe.',
        "Bank XYZ's item credit card product is part of its ongoing efforts to provide innovative financial solutions to its customers, and to continue to grow its market share in the highly competitive credit card industry.",
      ],
    },
    {
      img: "vjhs",
      title: "ABC Bank",
      id: "2",

      subTitle: "ABC Bank announces item mobile app for customers",
      description: [
        "ABC Bank, one of the leading banks in the country, has announced the launch of its item mobile app, designed to provide customers with a seamless banking experience on-the-go.",
        "The app, available for both iOS and Android devices, offers a range of features including the ability to view account balances and transaction history, transfer funds, pay bills, and locate nearby ATM and branch locations.",
        '"We are thrilled to introduce our item mobile app, which we believe will make banking easier and more convenient for our customers," said John Smith, CEO of ABC Bank. "With this app, customers can now access their accounts, make transactions, and manage their finances from anywhere, at any time."',
        "The app also features advanced security measures such as biometric login and multi-factor authentication, ensuring that customers' sensitive information is protected at all times.",
        "To promote the launch of the app, ABC Bank is offering a limited-time promotion of $50 cashback for customers who download and sign up for the app by the end of the month.",
        '"We hope that this promotion will encourage customers to try out the app and see for themselves how convenient and easy-to-use it is," added Smith.',
        "The item mobile app is part of ABC Bank's ongoing efforts to innovate and provide the best possible banking experience for its customers.",
      ],
    },
    {
      img: "vjhs",
      title: "ABC Bank",
      id: "3",

      subTitle: "ABC Bank announces item mobile app for customers",
      description: [
        "ABC Bank, one of the leading banks in the country, has announced the launch of its item mobile app, designed to provide customers with a seamless banking experience on-the-go.",
        "The app, available for both iOS and Android devices, offers a range of features including the ability to view account balances and transaction history, transfer funds, pay bills, and locate nearby ATM and branch locations.",
        '"We are thrilled to introduce our item mobile app, which we believe will make banking easier and more convenient for our customers," said John Smith, CEO of ABC Bank. "With this app, customers can now access their accounts, make transactions, and manage their finances from anywhere, at any time."',
        "The app also features advanced security measures such as biometric login and multi-factor authentication, ensuring that customers' sensitive information is protected at all times.",
        "To promote the launch of the app, ABC Bank is offering a limited-time promotion of $50 cashback for customers who download and sign up for the app by the end of the month.",
        '"We hope that this promotion will encourage customers to try out the app and see for themselves how convenient and easy-to-use it is," added Smith.',
        "The item mobile app is part of ABC Bank's ongoing efforts to innovate and provide the best possible banking experience for its customers.",
      ],
    },
    {
      img: "vjhs",
      title: "ABC Bank",
      id: "4",

      subTitle: "ABC Bank announces item mobile app for customers",
      description: [
        "ABC Bank, one of the leading banks in the country, has announced the launch of its item mobile app, designed to provide customers with a seamless banking experience on-the-go.",
        "The app, available for both iOS and Android devices, offers a range of features including the ability to view account balances and transaction history, transfer funds, pay bills, and locate nearby ATM and branch locations.",
        '"We are thrilled to introduce our item mobile app, which we believe will make banking easier and more convenient for our customers," said John Smith, CEO of ABC Bank. "With this app, customers can now access their accounts, make transactions, and manage their finances from anywhere, at any time."',
        "The app also features advanced security measures such as biometric login and multi-factor authentication, ensuring that customers' sensitive information is protected at all times.",
        "To promote the launch of the app, ABC Bank is offering a limited-time promotion of $50 cashback for customers who download and sign up for the app by the end of the month.",
        '"We hope that this promotion will encourage customers to try out the app and see for themselves how convenient and easy-to-use it is," added Smith.',
        "The item mobile app is part of ABC Bank's ongoing efforts to innovate and provide the best possible banking experience for its customers.",
      ],
    },
    {
      img: "vjhs",
      title: "ABC Bank",
      id: "5",

      subTitle: "ABC Bank announces item mobile app for customers",
      description: [
        "ABC Bank, one of the leading banks in the country, has announced the launch of its item mobile app, designed to provide customers with a seamless banking experience on-the-go.",
        "The app, available for both iOS and Android devices, offers a range of features including the ability to view account balances and transaction history, transfer funds, pay bills, and locate nearby ATM and branch locations.",
        '"We are thrilled to introduce our item mobile app, which we believe will make banking easier and more convenient for our customers," said John Smith, CEO of ABC Bank. "With this app, customers can now access their accounts, make transactions, and manage their finances from anywhere, at any time."',
        "The app also features advanced security measures such as biometric login and multi-factor authentication, ensuring that customers' sensitive information is protected at all times.",
        "To promote the launch of the app, ABC Bank is offering a limited-time promotion of $50 cashback for customers who download and sign up for the app by the end of the month.",
        '"We hope that this promotion will encourage customers to try out the app and see for themselves how convenient and easy-to-use it is," added Smith.',
        "The item mobile app is part of ABC Bank's ongoing efforts to innovate and provide the best possible banking experience for its customers.",
      ],
    },
  ];

  const [selectedNew, setSelectedNew] = useState(items[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNewSelect = (card) => {
    setSelectedNew(card);
    console.log(card.id);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: (i) => (
      <button type="button" aria-label={`Slide ${i + 1}`}>
        {i + 1}
      </button>
    ),
    afterChange: (currentSlide) => setCurrentSlide(currentSlide),
  };

  switch (items.length) {
    case 1:
      settings.slidesToShow = 1;
      break;
    case 2:
      settings.slidesToShow = 2;
      break;
    case 3:
      settings.slidesToShow = 3;
      break;
  }

  if (!items || !items.length) {
    return <div>No slides to display</div>;
  }

  return (
    <div>
      <NewsCard
        img={selectedNew.img}
        title={selectedNew.title}
        subTitle={selectedNew.subTitle}
        description={selectedNew.description}
      />
      <h5 style={{ marginLeft: "20px" }}> Latest news: </h5>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id}>
            <NewsCard
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              onClick={() => handleNewSelect(item)}
              bg={selectedNew.id == item.id ? "primary" : null}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default MySlider;
