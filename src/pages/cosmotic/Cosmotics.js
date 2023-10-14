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
  const [updateProduct, setUpdateProduct] = useState();
  const [updatedPoduct, setUpdatedPoduct] = useState();

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
  return (
    <div>
      <div className="d-flex mb-2 justify-content-center">
        <h2>Cosmotics</h2>
      </div>
      <Routes>
        <Route
          path="cosmoticUpdate"
          element={
            <CosmoticUpdate
              updateProduct={updateProduct}
              setUpdatedPoduct={setUpdatedPoduct}
            />
          }
        />
        <Route
          path="cosmoticCard"
          element={<CosmoticCard updatedPoduct={updatedPoduct} />}
        />
        <Route
          path="cosmoticSearch"
          element={
            <Fragment>
              {" "}
              <CosmoticSearch setQuery={setQuery} />
              <CosmoticList items={items} setUpdateProduct={setUpdateProduct} />
            </Fragment>
          }
        />
      </Routes>
    </div>
  );
};

export default Cosmotics;
