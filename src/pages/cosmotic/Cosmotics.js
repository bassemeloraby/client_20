import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";

// import { mainUrl } from "../../data";
import CosmoticList from "../../components/cosmotic/CosmoticList";
import CosmoticSearch from "../../components/cosmotic/CosmoticSearch";

const url = "/api/cosmotics";

const Cosmotics = () => {
  const [cosmotics, setCosmotics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();

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


  return (
    <div>
    <div className="d-flex mb-2">
      <h2>Cosmotics</h2>
    </div>
    <CosmoticSearch setQuery={setQuery}/>
    <CosmoticList items={items} />
  </div>
  )
}

export default Cosmotics