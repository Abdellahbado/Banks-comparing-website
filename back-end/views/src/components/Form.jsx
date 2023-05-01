import React, { useState } from "react";
import B from "../assets/letter-b.png";
import { Button } from "react-bootstrap";

const bank1 = [
  { nom_pres: "Ouverture compte", valeur: "12" },
  { nom_pres: "Condia choco", valeur: "2" },
  {
    nom_pres:
      "Prestation banque hallal avec les intérets  Prestation banque hallal avec les intéret",
    valeur: "39%",
  },
  { nom_pres: "Condition4", valeur: "Free 0 " },
  { nom_pres: "Condition5", valeur: "-1" },
  { nom_pres: "Imagine prestation ykon fua", valeur: "200" },
  { nom_pres: "Condition7", valeur: "39%" },
  { nom_pres: "Condition8", valeur: "100+10%(reduction alea) " },
  {
    nom_pres: "La paix complet ta3k gir riyeh a wdi Dz",
    valeur: "La paix complet ta3k gir riyeh a wdi Dz",
  },
];

const FormComponent = ({id}) => {
  const [formValues, setFormValues] = useState(
    bank1.reduce(
      (acc, { nom_pres, valeur }) => ({ ...acc, [nom_pres]: valeur }),
      {}
    )
  );

  const handleFree = (nom_pres) => {
    setFormValues((prevState) => ({ ...prevState, [nom_pres]: "0" }));
  };

  const handleDelete = (nom_pres) => {
    setFormValues((prevState) => ({ ...prevState, [nom_pres]: "-1" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to database
    console.log(formValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="mx-2"
        style={{ maxWidth: "100%", width: "100%" }}
      >
        {bank1.map(({ nom_pres }) => (
          <div
            key={nom_pres}
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <img className="rounded-4 m-2" src={B} width="15px" height="15px" />
            <label
              style={{ width: "16%", marginRight: "0px", flex: "1 0 auto" }}
            >
              {nom_pres}
            </label>
            <input
              type="text"
              name={nom_pres}
              value={formValues[nom_pres]}
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
                //width: "10%",
                backgroundColor: "#2FB00F",
                color: "white",
              }}
              onClick={() => handleFree(nom_pres)}
            >
              Gratuit
            </button>
            <button
              type="button"
              className="mb-2 rounded-3 border border-1"
              style={{
                //width: "10%",
                backgroundColor: "#E50B0B",
                color: "white",
              }}
              onClick={() => handleDelete(nom_pres)}
            >
              Suppr
            </button>
          </div>
        ))}
        <button
          type="submit"
          className="mb-2 m-2 rounded-3 border border-1 d-flex justify-content-center mx-auto"
          style={{
            width: "100px",
            height: "40px",
            minWidth: "60px",
            backgroundColor: "#0027F6",
            color: "white",
          }}
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
