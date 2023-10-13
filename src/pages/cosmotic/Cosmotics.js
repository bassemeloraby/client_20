import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Spinner from "../../components/Spinner";
import CosmoticList from "../../components/cosmotic/CosmoticList";
import CosmoticSearch from "../../components/cosmotic/CosmoticSearch";
import CosmoticUpdate from "../../components/cosmotic/CosmoticUpdate";
import CosmoticCard from "../../components/cosmotic/CosmoticCard";

const url = "/api/products";

const Cosmotics = () => {
  const [cosmotics, setCosmotics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();
  const [cos, setCos] = useState([]);
  const [afterUpdate, setAfterUpdate] = useState("");
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
          x.Description.toLowerCase().includes(query?.toLowerCase()) ||
          x.Company.toLowerCase().includes(query?.toLowerCase())
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
              setAfterUpdate={setAfterUpdate}
            />
          }
        />
        <Route
          path="cosmoticCard"
          element={<CosmoticCard afterUpdate={afterUpdate} />}
        />
      </Routes>

      <Fragment>
        {" "}
        <CosmoticSearch setQuery={setQuery} />
        <CosmoticList items={items} setCos={setCos} />
      </Fragment>
    </div>
  );
};

export default Cosmotics;
