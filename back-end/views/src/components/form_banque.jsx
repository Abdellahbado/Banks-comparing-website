import React, { useState, useEffect } from "react";
import B from "../assets/letter-b.png";
import axios from "axios";

const makePresNull = (pres) => {
  for (let i = 0; i < pres.length; i++) {
    pres[i].frais = "";
  }
  return pres;
};

{
  /*const handleFileUpload=async(e)=>{
  e.preventDefault();
  setLoading(true);
  const formData=new FormData();
  formData.append("image",file);
  formData.append("name",name);
}
try{
  const res=await axios.post("https://localhost:3001/",formData,{
    header:{
      'Content-Type':"multipart/form-data"
    },
  }
);
console.log(res.data);
setImg(res.data.imageData)
setLoading(false)
}catch(err){
  console.error(err);
  setLoading(false);
}
*/
}

function addNameObjects(array) {
  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Localisation d'une agence",
    frais: "",
  });
  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Logo",
    frais: "",
  });
  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Fax",
    frais: "",
  });

  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Telephone",
    frais: "",
  });

  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Siege Sociale",
    frais: "",
  });

  array.unshift({
    pres_id: array.length + 1,
    pres_nom: "Nom de la banque",
    frais: "",
  });

  return array;
}

function modifyBankObject({
  "Nom de la banque": Nom,
  "Siege Sociale": Siege,
  Telephone,
  Fax,
  Logo,
  Localisation,
}) {
  return {
    Nom_banque: Nom,
    Siege_social: Siege,
    Telephone,
    Fax,
    Logo,
    Localisation,
  };
}
const FormComponent = ({ id }) => {
  const [pres, setPres] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/admin/prestations/101`
      );
      setPres(addNameObjects(makePresNull(response.data)));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [formValues, setFormValues] = useState({});
  const [imageFile, setImageFile] = useState(null); // add state variable to store selected image file

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

      const banks = updatedBank1.slice(0, 4);
      const prestations = updatedBank1.splice(4);
      const bankk = modifyBankObject(formValues);
      const { prestation1, prestation2, ...restPrestations } = prestations;
      const newBank = {
        Banque: bankk,
        Prestation: {
          ...restPrestations,
        },
      };
      console.log(id);
      try {
        await axios.post(`http://localhost:3500/admin/bank/${id}`, newBank);
        console.log(updatedBank1);
        console.log(banks);
        console.log(prestations);
        window.location.reload();
      } catch (e) {
        console.error(e);
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0]; // get the selected image file
      setImageFile(file); // update the state variable with the selected image file
    };

    return (
      <div className="d-flex justify-content-center">
        {/*    <form onSubmit={handleFileUpload} >
            <p>Ou ajoutez votre photo</p>
            <button onClick={handlePic} > <input type="file" onChange={handleFileSelect} /> <img src={imgpic} alt="" /><p>importer une photo</p><div></div></button>
            {file?<p>{file.name}</p>:null}
            <button className='w-72 h-16 px-8 bg-blue-secondary bg-opacity-50 hover:bg-opacity-100 active:bg-blue-primary flex justify-between items-center rounded-xl duration-300' onClick={handlePic}><img src={cam} alt="" /><p>prendre une photo</p><div></div></button>
            <button type='submit' disabled={loading}>submit</button>
        </form> */}
        <form
          onSubmit={handleSubmit}
          className="mx-2"
          style={{ maxWidth: "900px", width: "100%" }}
          encType="multipart/form-data"
        >
          <p>0 pour les prestations gratuits, -1 si la prestation n'exsite pas</p>
          <p>Ne laissez pas un champ vide s'il vous plait</p>

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
                style={{ width: "300px", marginRight: "0px", flex: "1 0 auto" }}
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
            </div>
          ))}
          <button
            type="submit"
            className="mb-2 m-2 rounded-3 border border-1 d-flex justify-content-center mx-auto"
            style={{
              width: "102.72px",
              backgroundColor: "#0027F6",
              color: "white",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Valider
          </button>
        </form>
      </div>
    );
  }
};

export default FormComponent;
