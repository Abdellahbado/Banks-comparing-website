import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Search from "./search";
import Diaporama from "./diaporama";
import Paragraph from "./paragraph";
import Footer from "./Footer";

const HomePage = forwardRef((props, ref) => {
  return (
    <>
      <Paragraph />
      <Search ref={ref} />
    </>
  );
});

export default HomePage;
