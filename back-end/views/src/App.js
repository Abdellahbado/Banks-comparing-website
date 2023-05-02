import AfficheCadres from "./components/afficher_cadre";
import NavBarV from "./components/NavbarV";
import FooterAdmin from "./components/Footer-v";
import SideBar from "./components/sidebar";
import { Routes, Route } from "react-router-dom";
import AffichPres from "./components/affichPres";

function App() {
  return (
    <>
      <NavBarV />
      <SideBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div style={{ marginLeft: "50px" }}>
              <AfficheCadres />
            </div>
          }
        />
        <Route exact path="/prestation" element={<AffichPres />} />
      </Routes>
      <FooterAdmin />
    </>
  );
}

export default App;
