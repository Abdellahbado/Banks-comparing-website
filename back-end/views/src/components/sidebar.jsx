import React, { useState } from "react";
import "../styles/side.css";
import { FaBars, FaNewspaper, FaUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            {" "}
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <NavLink to={"/admin/"} key={1} className="link" activeclassname="active">
          <div className="icon">{<FaMoneyBill />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {"Banques"}
          </div>
        </NavLink>
        <NavLink
          to={"/admin/prestation"}
          key={2}
          className="link"
          activeclassname="active"
        >
          <div className="icon">{<FaBriefcase />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {"Prestations"}
          </div>
        </NavLink>
        <NavLink
          to={"/admin/news"}
          key={3}
          className="link"
          activeclassname="active"
        >
          <div className="icon">{<FaNewspaper />}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {"News"}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
