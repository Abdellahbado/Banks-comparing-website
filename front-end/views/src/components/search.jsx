import React, { useState, useEffect, forwardRef } from "react";
import { Form, Button, Dropdown, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalForm from "./form";
//import { banks } from "../models/bank_model.js";
import "../styles/dropdown.css";
import "../styles/button.css";
import CadreScrollable from "./cadres/cadre_carousel";
import axios from "axios";

const Search = forwardRef((props, ref) => {
  const [sortedBanks, setSortedBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [prest, setPrest] = useState([]);
  const fetchPres = async () => {
    try {
      const response = await axios.get("http://localhost:3500/aceuil/pres");
      setPrest(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/aceuil");
      setSortedBanks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("a");
    fetchData();
    fetchPres();
  }, []);

  // here dir call l api bach tjib les banques
  // w 7otha f variable wasmo banks psq ani nkdm bih
  // dok nb3tlk kich object t3 banks yji fih mn attributs

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [filtreID, setFiltreID] = useState(0);
  const handleFiltreShow = (id) => {
    setFiltreID(id);
    setShowModal(true);
  };
  const [filteredBanks, setFilteredBanks] = useState(sortedBanks);

  useEffect(() => {
    // hadi fkitered banks li ra7 t'afficha ki yekteb string f recherche
    const filteredBanks1 = sortedBanks.filter((bank) => {
      return search.toLowerCase() === ""
        ? bank
        : bank.Nom_banque.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredBanks(filteredBanks1);
  }, [search, sortedBanks]);
  let res; // will store the result of the response
  const sortBanks = async (id) => {
    sortedBanks.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    try {
      const response = await axios.get(
        `http://localhost:3500/aceuil/tri/${id}`
      );
      res = response.data;
      if (res !== null) {
        const arr = res;
        setSortedBanks(arr);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFiltreFormSubmit = async (min, max) => {
    try {
      const response = await axios.get(
        `http://localhost:3500/aceuil/filtrer/${filtreID}/${min}/${max}`
      );
      //const response = axios.get(`http://localhost:3500/aceuil/filtrer/2/500/500`);

      console.log(response.data);
      res = response.data;
      if (res !== null) {
        const arr = res;
        setSortedBanks(arr);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // this will make the from focused when the ref is set
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          className="d-flex"
          style={{ width: "1000px", marginLeft: "10px" }}
        >
          <Form.Control
            ref={ref}
            type="text"
            placeholder="Rechercher une banque"
            style={{ height: "50px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Dropdown>
            <Dropdown.Toggle
              variant="custom"
              id="dropdown-basic"
              style={{ marginLeft: "10px" }}
              className="dropdown-toggle-custom"
            >
              Trier
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{ maxHeight: "400px", overflowY: "auto" }}
              className="dropdown-menu-custom"
            >
              {prest === null ? (
                <Dropdown.Item className="dropdown-item-custom" href="#">
                  Loading prestations ...
                </Dropdown.Item>
              ) : (
                prest.map((pres) => (
                  <Dropdown.Item
                    className="dropdown-item-custom"
                    href="#"
                    onClick={() => sortBanks(pres.pres_id)}
                  >
                    {pres.pres_nom}
                  </Dropdown.Item>
                ))
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant="custom"
              className="dropdown-toggle-custom"
              id="dropdown-basic"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              Filtrer
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{ maxHeight: "400px", overflowY: "auto" }}
              className="dropdown-menu-custom"
            >
              {prest === null ? (
                <Dropdown.Item className="dropdown-item-custom" href="#">
                  Loading prestations ...
                </Dropdown.Item>
              ) : (
                prest.map((pres) => (
                  <Dropdown.Item
                    className="dropdown-item-custom"
                    href="#"
                    onClick={() => {
                      handleFiltreShow(pres.pres_id);
                    }}
                  >
                    {pres.pres_nom}
                  </Dropdown.Item>
                ))
              )}
            </Dropdown.Menu>
            <ModalForm
              showModal={showModal}
              handleClose={handleClose}
              onSubmit={handleFiltreFormSubmit}
            />
          </Dropdown>
        </Form>
      </div>

      <div>
        {isLoading === true ? (
          <p>Loading banks...</p>
        ) : filteredBanks.length !== 0 ? (
          <CadreScrollable banques={filteredBanks} />
        ) : (
          <Card className="my-card mx-auto" style={{ width: "300px" }}>
            <Card.Body>
              <Card.Title>No bank found</Card.Title>
            </Card.Body>
          </Card>
        )}
        {/* {!props.isLoading && filteredBanks.length > 0 && (
            <div>
              <CadreScrollable banques={filteredBanks} />
            </div>
          )}
        {!props.isLoading && filteredBanks.length === 0 && <p>No results found.</p>} */}
      </div>
    </>
  );
});

export default Search;
