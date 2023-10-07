import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Insurance from "./pages/insurance/Insurance";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import AllDrugs from "./pages/medicine/AllDrugs";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allD" element={<AllDrugs />} />
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
