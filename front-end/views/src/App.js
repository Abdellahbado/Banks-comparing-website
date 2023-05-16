import React, { useRef, useState, useEffect } from "react";
import HomePage from "./components/home_page";
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Diaporama from "./components/diaporama";
import ComparerComplet from "./components/comparer_complet";
import MySlider from "./components/news_slider";
import Aboutus from "./components/about";
import axios from "axios";

function App() {
  const searchRef = useRef(null);
  const scrollToSearch = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - window.innerHeight / 10,
      behavior: "smooth",
    });
  };

  const handleSearchClick = () => {
    if (searchRef && searchRef.current) {
      scrollToSearch(searchRef);
    }
  };

  const [news, setNews] = useState([]);
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

  return (
    <>
      <NavBar onSearchClick={handleSearchClick} />
      <Diaporama />
      <Routes>
        <Route exact path="/" element={<HomePage ref={searchRef} />} />
        <Route exact path="/comparer" element={<ComparerComplet />} />
        <Route exact path="/news" element={<MySlider items={news} />} />
        <Route exact path="/qui-sommes-nous" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
