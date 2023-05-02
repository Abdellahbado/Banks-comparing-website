import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "./cadres/newsCards.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/news_style.css";

const News = () => {
  const news = [
    {
      title: "Bank XYZ ",
      id: "1",

      subTitle: " Bank XYZ has recently launched a new credit card product  ",
      description: [
        "Offering generous rewards and benefits for those who frequently fly or stay at hotels.",
        "The card, which comes with a competitive interest rate, offers rewards such as airline miles, hotel loyalty points, and cashback on purchases made with the card.",
        "In addition, cardholders receive exclusive perks such as access to airport lounges, complimentary travel insurance, and 24/7 concierge service.",
        'We understand that frequent travelers have unique needs when it comes to their financial products, and we are proud to offer a credit card that caters to those needs," said Jane Doe, CEO of Bank XYZ. "With this card, our customers can enjoy a range of benefits and rewards that make traveling more enjoyable and affordable."',
        "To promote the launch of the card, Bank XYZ is offering a limited-time sign-up bonus of 50,000 airline miles or hotel loyalty points to new cardholders who spend $3,000 or more in the first three months.",
        '"We are confident that this offer will be attractive to frequent travelers who are looking for a credit card that offers valuable rewards and benefits," added Doe.',
        "Bank XYZ's new credit card product is part of its ongoing efforts to provide innovative financial solutions to its customers, and to continue to grow its market share in the highly competitive credit card industry.",
      ],
      src:
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
    },
    {
      title: "ABC Bank",
      id: "2",

      subTitle: "ABC Bank announces new mobile app for customers",
      description: [
        "ABC Bank, one of the leading banks in the country, has announced the launch of its new mobile app, designed to provide customers with a seamless banking experience on-the-go.",
        "The app, available for both iOS and Android devices, offers a range of features including the ability to view account balances and transaction history, transfer funds, pay bills, and locate nearby ATM and branch locations.",
        '"We are thrilled to introduce our new mobile app, which we believe will make banking easier and more convenient for our customers," said John Smith, CEO of ABC Bank. "With this app, customers can now access their accounts, make transactions, and manage their finances from anywhere, at any time."',
        "The app also features advanced security measures such as biometric login and multi-factor authentication, ensuring that customers' sensitive information is protected at all times.",
        "To promote the launch of the app, ABC Bank is offering a limited-time promotion of $50 cashback for customers who download and sign up for the app by the end of the month.",
        '"We hope that this promotion will encourage customers to try out the app and see for themselves how convenient and easy-to-use it is," added Smith.',
        "The new mobile app is part of ABC Bank's ongoing efforts to innovate and provide the best possible banking experience for its customers.",
      ],
      src:
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/%D0%90%D0%B1%D0%B4%D0%B5%D0%BB%D1%8C%D0%BC%D0%B0%D0%B4%D0%B6%D0%B8%D0%B4_%D0%A2%D0%B5%D0%B1%D0%B1%D1%83%D0%BD_%2806-11-2021%29.jpg",
    },
  ];
  const [selectedNew, setSelectedNew] = useState(news[0]);

  const handleNewSelect = (card) => {
    setSelectedNew(card);
    console.log(card.id);
  };

  return (
    <Container className="body">
      <Row>
        <Col xs={8}>
          <NewsCard
            bg={"beige"}
            title={selectedNew.title}
            subTitle={selectedNew.subTitle}
            description={selectedNew.description}
            src={selectedNew.src}
          />
        </Col>

        <Col xs={4}>
          {news.map((item) => (
            <NewsCard
              onClick={() => handleNewSelect(item)}
              bg={selectedNew.id == item.id ? "beige" : "lightbeige"}
              title={item.title}
              subTitle={item.subTitle}
              src={item.src}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default News;
