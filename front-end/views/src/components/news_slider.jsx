import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "./cadres/news_card";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import axios from "axios";
function MySlider() {
  const items = [
    {
      img:
        "https://blockworks.co/_next/image?url=https://blockworks-co.imgix.net/wp-content/uploads/2023/04/first-republic-bank.jpg&w=1920&q=75&webp=false",

      title: "La Banque d'Algérie",
      id: "1",

      subTitle: " La Banque d'Algérie, a introduit une nouvelle politique  ",
      description: [
        "La Banque d'Algérie, qui est la banque centrale du pays, a introduit une nouvelle politique visant à soutenir la croissance de l'économie algérienne. La politique vise à promouvoir l'inclusion financière et encourager les banques à accroître les prêts aux petites et moyennes entreprises. La Banque d'Algérie espère que cette politique aidera à stimuler la croissance économique et à créer des emplois en Algérie.",
      ],
    },
    {
      img:
        "https://ichef.bbci.co.uk/news/1024/branded_news/9B5F/production/_129557793_gettyimages-1485498014.jpg",

      title: "Banque Nationale d'Algérie (BNA)",
      id: "2",

      subTitle: " BNA a signé un mémorandum d'accord",
      description: [
        "Banque Nationale d'Algérie (BNA), qui est également l'une des plus grandes banques d'Algérie, a signé un mémorandum d'accord avec la Banque d'import-export de Chine le 15 avril 2023. L'accord vise à promouvoir le commerce et l'investissement entre l'Algérie et la Chine et à fournir un financement aux entreprises algériennes souhaitant exporter vers la Chine. Ce partenariat pourrait contribuer à stimuler la croissance économique de l'Algérie et à créer des opportunités.",
      ],
    },

    {
      img:
        "https://live-production.wcms.abc-cdn.net.au/14451e04795ce13882e8b1aab78d63a9?impolicy=wcms_crop_resize&cropH=1932&cropW=3435&xPos=0&yPos=0&width=862&height=485",

      title: "Société Générale Algérie",
      id: "3",

      subTitle: "Société Générale Algérie, a publié de solides ",
      description: [
        "Société Générale Algérie, qui est l'une des plus grandes banques du pays, a publié de solides résultats pour le premier trimestre de 7,5 milliards de dinars algériens (environ 55 millions de dollars) le 28 avril 2023. Il s'agissait d'une augmentation de 12 % par rapport à la même période l'année dernière. La banque a attribué sa solide performance à une hausse des revenus de ses divisions banque de détail et assurance.",
      ],
    },
  ];
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3500/news");
      setNews(response.data);
      console.log(news);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
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
    <div
      style={{
        marginBottom: "50px",
        marginRight: "100px",
        marginLeft: "100px",
      }}
    >
      <NewsCard
        img={selectedNew.img}
        title={selectedNew.title}
        subTitle={selectedNew.subTitle}
        description={selectedNew.description}
      />
      <h5 style={{ marginLeft: "20px" }}> Latest news: </h5>
      <Slider
        {...settings}
        prevArrow={<BsChevronLeft size={120} color="blue" />}
        nextArrow={<BsChevronRight size={120} color="blue" />}
      >
        {items.map((item, index) => (
          <div key={item.id}>
            <NewsCard
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
              onClick={() => handleNewSelect(item)}
              bg={selectedNew.id == item.id ? "primary" : null}
              id={item.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default MySlider;
