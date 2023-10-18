import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Insurance from "./pages/insurance/Insurance";
import AllDrugs from "./pages/medicine/AllDrugs";
import Cosmotics from "./pages/cosmotic/Cosmotics";
import Indication from "./pages/medicine/Indication";
import IdleTimerContainer from "./components/IdleTimerContainer";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      {user && <IdleTimerContainer></IdleTimerContainer>}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allD/*" element={<AllDrugs />} />
          <Route path="/indication/:ScientificName" element={<Indication />} />
          <Route path="/cosmotics/*" element={<Cosmotics />} />

          <Route path="/insurance" element={<Insurance />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div style={{ width: "50px", textAlign: "center", margin: "auto" }}>
          <ToastContainer className="justify-content-md-center" />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
