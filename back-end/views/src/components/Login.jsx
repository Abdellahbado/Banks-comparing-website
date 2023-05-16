import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, { user: user, pwd: pwd });
      console.log(response?.data);
      //console.log(JSON.stringify(response));
      //const accessToken = response?.data?.accessToken;
      //setAuth({ user, pwd, accessToken });
      setUser("");
      setPwd("");
      // Set the `isAuthenticated` variable to true.
      localStorage.setItem("isAuthenticated", "true");
      // Redirect the user to the home page.
      navigate("/admin");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Serveur ne repond pas.");
      } else if (err.response?.status === 401) {
        setErrMsg("Adresse ou mot de passe incorrect. ");
      } else {
        setErrMsg("Connexion impossible.");
      }
      errRef.current.focus();
    }
  };

  return (
    
    <div class="cont">
     
      <section
        style={{
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
        }}
      >
        <p
          ref={errRef}
          style={{ color: "red", textAlign: "center" }}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">E-mail/Pseudo: </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            placeholder="Veuillez ente votre email"
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            placeholder="Veuillez ente votre mot de passe "
          />
          <button className="fanc"> Se connecter</button>
        </form>
      </section>
    </div>
 
  );
};

export default Login;
