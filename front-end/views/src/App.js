import React, { useRef, forwardRef } from "react";
import HomePage from "./components/home_page";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Comparer from "./components/Comparer";

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

  return (
    <>
      <NavBar onSearchClick={handleSearchClick} />
      <Routes>
        <Route exact path="/" element={<HomePage ref={searchRef} />} />
        <Route exact path="/comparer" element={<Comparer />} />
      </Routes>
    </>
  );
}

export default App;
