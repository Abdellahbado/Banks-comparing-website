import NavBarV from "./NavbarV";
import FooterAdmin from "./Footer-v";
import SideBar from "./sidebar";
import { Routes, Route } from "react-router-dom";
import AffichPres from "./affichPres";
import AffichNews from "./affichNews";
import AfficheCadres from "./afficher_cadre";
import Login from "./Login";

function AdminPage() {
  return (
    <>
      <NavBarV />
      <SideBar />
      <Routes>
        <Route path="/" element={<AfficheCadres />} />
        <Route path="/prestation" element={<AffichPres />} />
        <Route path="/news" element={<AffichNews />} />
      </Routes>
      <FooterAdmin />
    </>
  );
}

export default AdminPage;
