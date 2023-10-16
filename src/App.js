import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Insurance from "./pages/insurance/Insurance";
import Dashboard from "./pages/Dashboard";
import AllDrugs from "./pages/medicine/AllDrugs";
import Cosmotics from "./pages/cosmotic/Cosmotics";
import Indication from "./pages/medicine/Indication";

function App() {
  return (
    <Fragment>
    <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allD/*" element={<AllDrugs />} />
          <Route path="/indication/:ScientificName" element={<Indication />} />
          <Route path="/cosmotics/*" element={<Cosmotics />} />

          <Route path="/insurance" element={<Insurance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div style={{ width: "50px", textAlign: "center", margin: "auto" }}>
          <ToastContainer className="justify-content-md-center" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
