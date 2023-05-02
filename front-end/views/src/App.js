import React, { useRef } from "react";
import HomePage from "./components/home_page";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Diaporama from "./components/diaporama";
import ComparerComplet from "./components/comparer_complet";
import Aboutus from "./components/about";



function App() {
  const searchRef = useRef(null);
  const scrollToSearch = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - window.innerHeight / 4,
      behavior: "smooth",
    });
  };

  const handleSearchClick = () => {
    if (searchRef && searchRef.current) {
      scrollToSearch(searchRef);
    }
  };

  return (
    <>
      <NavBar onSearchClick={handleSearchClick} />
      <Diaporama />
      <Routes>
        <Route exact path="/" element={<HomePage ref={searchRef} />} />
        <Route exact path="/comparer" element={<ComparerComplet />} />
        <Route exact path="/qui-sommes-nous" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;