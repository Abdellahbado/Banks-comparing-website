import React from "react";
import AjouterPres from "./ajouterPres";

function News({ showModal, setShowModal }) {
  return (
    <>
      <div>News</div>
      <AjouterPres showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default News;
