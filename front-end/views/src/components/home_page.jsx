import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Search from "./search";
import Diaporama from "./diaporama";
import Paragraph from "./paragraph";
import Footer from "./Footer";

const HomePage = forwardRef((props, ref) => {
  return (
    <>
      <Diaporama />
      <Paragraph />
      <Search ref={ref} />
      <Footer />
    </>
  );
});

export default HomePage;
