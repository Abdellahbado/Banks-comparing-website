import React, { forwardRef } from "react";
import Search from "./search";
import Paragraph from "./paragraph";

const HomePage = forwardRef((props, ref) => {
  return (
    <>
      <Paragraph />
      <Search ref={ref} />
    </>
  );
});

export default HomePage;