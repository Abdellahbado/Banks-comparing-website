import React, { useState, useEffect, forwardRef } from "react";
import { Form, Button, Dropdown, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./form";
import { banks } from "../models/bank_model.js";
import "../styles/dropdown.css";
import "../styles/button.css";
import CadreScrollable from "./cadres/cadre_carousel";
const Search = forwardRef((props, ref) => {
  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  // here dir call l api bach tjib les banques
  // w 7otha f variable wasmo banks psq ani nkdm bih
  // dok nb3tlk kich object t3 banks yji fih mn attributs
  const pres = [
    { id: 1, name: "pres1" },
    { id: 2, name: "pres2" },
    { id: 3, name: "pres3" },
    { id: 4, name: "pres4" },
    { id: 5, name: "pres5" },
    { id: 6, name: "pres6" },
    { id: 7, name: "pres7" },
    { id: 8, name: "pres8" },
    { id: 9, name: "pres9" },
    { id: 10, name: "pres10" },
    { id: 11, name: "pres11" },
    { id: 12, name: "pres12" },
    { id: 13, name: "pres13" },
    { id: 14, name: "pres14" },
    { id: 15, name: "pres15" },
    { id: 16, name: "pres16" },
    { id: 17, name: "pres17" },
    { id: 18, name: "pres18" },
    { id: 19, name: "pres19" },
    { id: 20, name: "pres20" },
    { id: 21, name: "pres21" },
    { id: 22, name: "pres22" },
    { id: 23, name: "pres23" },
    { id: 24, name: "pres24" },
  ];
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const myBanks = banks;
  const [sortedBanks, setSortedBanks] = useState([...myBanks]);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const sortBanks = (id) => {
    sortedBanks.sort(compare);
    // hna dir api t3 tri 3la 7sab id t3 prestation
    // omb3d résultat dirha f hada variable arr
    const arr = [...sortedBanks];
    setSortedBanks(arr);
  };
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleFitreFormSubmit = (minValue, maxValue) => {
    setMinValue(minValue);
    setMaxValue(maxValue);
    // hna dir api t3 fitre b min w max
    // const arr = respons et3 api
    // setSortedBanks(arr);
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
              {pres.map((pres) => (
                <Dropdown.Item
                  className="dropdown-item-custom"
                  href="#"
                  onClick={() => sortBanks(pres.id)}
                >
                  {pres.name}
                </Dropdown.Item>
              ))}
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
              {pres.map((pres) => (
                <Dropdown.Item
                  className="dropdown-item-custom"
                  href="#"
                  onClick={handleShow}
                >
                  {pres.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Veuiller entrer les deux valeurs du filtre
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <MyForm onSubmit={handleFitreFormSubmit} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fermer
                </Button>
                <Button variant="myButtonVariant" onClick={handleClose}>
                  Filtrer
                </Button>
              </Modal.Footer>
            </Modal>
          </Dropdown>
        </Form>
      </div>

      <div>
        <CadreScrollable banques={filteredBanks} />
      </div>
    </>
  );
});

export default Search;
