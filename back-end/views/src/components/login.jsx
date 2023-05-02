import { useState } from "react";
//import "../index.css";
import axios from "axios";
const Thelogin = () => {
  const [adresse, setadresse] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async () => {
    const data = { user: adresse, pwd: password };
    try {
      const response = await axios.post("http://localhost:3500/auth", data);
      console.log(response.status);
      // Assuming the server returns a 401 status code for invalid login credentials
      if (response.status === 401) {
        setErrorMessage("Email or password is incorrect");
      } else if (response.status === 200) {
      }
      // Handle successful login response
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="containere">
      <div className="create">
        <form className="needs-validation" onSubmit={submitForm}>
          <h1 className="login"> Vous etes en retour ! </h1>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="form-group was-validated">
            <label htmlFor="email" className="form-label">
              {" "}
              E-mail
            </label>

            <input
              type="text"
              className="form-control "
              required
              placeholder="saisir votre adresse e-mail"
              value={adresse}
              onChange={(e) => setadresse(e.target.value)}
            />
            <div className="invalid-feedback">Entrer votre E-mail svp !</div>
          </div>
          <div className="form-group was-validated">
            <label htmlFor="password" className="form-label">
              {" "}
              Mot de passe{" "}
            </label>
            <input
              type="password"
              className="form-control"
              required
              placeholder="saisir votre Mot de passe"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="invalid-feedback">
              Entrer votre Mot de passe svp !
            </div>
          </div>
          <a href="/oublie" className="oublie">
            {" "}
            Mot de passe oublié{" "}
          </a>

          <button type="submit " className="fancy">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Thelogin;
