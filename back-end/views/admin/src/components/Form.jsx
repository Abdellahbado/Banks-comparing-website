import React, { useState, useEffect } from "react";
import B from "../assets/letter-b.png";
import axios from "axios";

const bank1 = [
  { pres_nom: "Ouverture compte", frais: "12", id: 12003 },
  { pres_nom: "Condia choco", frais: "20", id: 12003 },
  {
    pres_nom: "Prestation banque hallal avec les intérets",
    frais: "39%",
    id: 13000,
  },
];

const FormComponent = ({ id }) => {
  const [pres, setPres] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/admin/prestations/${id}`
      );
      setPres(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [formValues, setFormValues] = useState({});

  if (pres === null) {
    return <div>Loading prestations...</div>;
  } else {
    const handleFree = (pres_nom) => {
      setFormValues({ ...formValues, [pres_nom]: "0" });
    };

    const handleDelete = (pres_nom) => {
      setFormValues({ ...formValues, [pres_nom]: "-1" });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const updatedBank1 = pres.map((item) => ({
        ...item,
        frais: formValues[item.pres_nom] || item.frais,
      }));

      try {
        const response = await axios.post(
          `http://localhost:3500/admin/prestations/${id}`,
          updatedBank1
        );
      } catch (e) {
        console.error(e);
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };

    return (
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="mx-2"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          {pres.map(({ pres_nom, frais }) => (
            <div
              key={pres_nom}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img className="rounded-4 m-2" src={B} width="15" height="15" />
              <label
                style={{ width: "200px", marginRight: "0px", flex: "1 0 auto" }}
              >
                {pres_nom}
              </label>
              <input
                type="text"
                name={pres_nom}
                value={formValues[pres_nom] || frais}
                onChange={handleChange}
                className="mx-2 mb-2 rounded-2"
                style={{
                  borderColor: "#0027F6",
                  flex: "1 0 45%",
                  overflow: "hidden",
                }}
              />
              <button
                type="button"
                className="mx-2 mb-2 rounded-3 border border-1"
                style={{
                  width: "66px",
                  backgroundColor: "#2FB00F",
                  color: "white",
                }}
                onClick={() => handleFree(pres_nom)}
              >
                Gratuit
              </button>
              <button
                type="button"
                className="mb-2 rounded-3 border border-1"
                style={{
                  width: "66px",
                  backgroundColor: "#E50B0B",
                  color: "white",
                }}
                onClick={() => handleDelete(pres_nom)}
              >
                Suppr
              </button>
            </div>
          ))}
          <button
            type="submit"
            className="mb-2 m-2 rounded-3 border border-1 d-flex justify-content-center mx-auto"
            style={{
              width: "74.72px",
              //height: "6.5%",
              backgroundColor: "#0027F6",
              color: "white",
            }}
          >
            Valider
          </button>
        </form>
      </div>
    );
  }
};

export default FormComponent;
