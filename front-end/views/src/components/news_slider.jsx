import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "./cadres/news_card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";
const items = [
  {
    news_image: "",
    news_titres: "",
    news_id: "",
    news_sous_titres: " ",
    news_contenu: ["Chargement des news ..."],
  },
];
function MySlider() {
  const [News, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3500/news");
      setNews(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  useEffect(() => {
    console.log(News);
    if (News.length > 0) setSelectedNew(News[0]);
  }, [News]);
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

  // switch (items.length) {
  //   case 1:
  //     settings.slidesToShow = 1;
  //     break;
  //   case 2:
  //     settings.slidesToShow = 2;
  //     break;
  //   case 3:
  //     settings.slidesToShow = 3;
  //     break;
  // }

  if (News.length === 0) {
    return <div>Chargement des news</div>;
  }

  return (
    <div
      style={{
        marginBottom: "50px",
        marginRight: "100px",
        marginLeft: "100px",
      }}
    >
      <NewsCard
        img={selectedNew.news_image}
        title={selectedNew.news_titres}
        subTitle={selectedNew.news_sous_titres}
        description={selectedNew.news_contenu}
      />
      <h5 style={{ marginLeft: "20px" }}> News récentes: </h5>
      <Slider
        {...settings}
        prevArrow={<BsChevronLeft size={120} color="blue" />}
        nextArrow={<BsChevronRight size={120} color="blue" />}
      >
        {News.map((item, index) => (
          <div key={item.news_id}>
            <NewsCard
              img={item.news_image}
              title={item.news_titres}
              subTitle={item.news_sous_titres}
              onClick={() => handleNewSelect(item)}
              bg={selectedNew.news_id == item.news_id ? "primary" : null}
              id={item.news_id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default MySlider;
