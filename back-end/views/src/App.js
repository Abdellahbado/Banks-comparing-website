import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import AdminPage from "./components/admin_page";
import Login from "./components/Login";
function App() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  // if (pathname !== "/login") {
  //   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }

  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
