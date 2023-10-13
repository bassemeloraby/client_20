import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import CosmoticList from "../../components/cosmotic/CosmoticList";
import CosmoticSearch from "../../components/cosmotic/CosmoticSearch";
import CosmoticUpdate from "../../components/cosmotic/CosmoticUpdate";

const url = "/api/cosmotics";

const Cosmotics = () => {
  const [cosmotics, setCosmotics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [cos, setCos] = useState([]);
  useEffect(() => {
    const fetchCosmotics = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}`);
        setLoading(false);
        setCosmotics(res.data);
        console.log(res.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchCosmotics();
  }, []);

  useEffect(() => {
    if (!query) setItems(cosmotics);
    setItems((_) =>
      cosmotics.filter(
        (x) =>
          x.cosCompany.toLowerCase().includes(query?.toLowerCase()) ||
          x.Description.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, cosmotics]);

  useEffect(() => {
    setItems(cosmotics);
  }, [cosmotics]);

  if (loading) {
    return <Spinner />;
  }
  console.log(cos);
  return (
    <div>
      <div className="d-flex mb-2">
        <h2>Cosmotics</h2>
      </div>
      <Routes>
      <Route
        path="cosmoticUpdate"
        element={
          <CosmoticUpdate
            cos={cos}
            setCos={setCos}
          />
        }
      />
    </Routes>
      {!cos && (
        <Fragment>
          {" "}
          <CosmoticSearch setQuery={setQuery} />
          <CosmoticList items={items} setCos={setCos} />
        </Fragment>
      )}

     
    </div>
  );
};

export default Cosmotics;