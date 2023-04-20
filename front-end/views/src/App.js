import React from "react";
import Search from "./components/search";
import Diaporama from "./components/diaporama";
import Paragraph from "./components/paragraph";
import { Navbar } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Diaporama />
      <Paragraph />
      <Search />
      <Footer />
    </>
  );
}

export default App;
