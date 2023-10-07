import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDrug, reset } from "../../features/allDrug/allDrugSlice";
import Spinner from "../../components/Spinner";
import AllDrugsList from "../../components/medicine/allDrugs/AllDrugsList";
import AllDugsSearch from "../../components/medicine/allDrugs/AllDugsSearch";

const AllDrugs = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState();

  const dispatch = useDispatch();
  const { allDrugs, isLoading, isError, message } = useSelector(
    (state) => state.allDrug
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getAllDrug());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  useEffect(() => {
    if (!query) setItems(allDrugs);
    setItems((_) =>
      allDrugs.filter(
        (x) =>
          x.ScientificName.toLowerCase().includes(query?.toLowerCase()) ||
          x.TradeName.toLowerCase().includes(query?.toLowerCase())
      )
    );
  }, [query, allDrugs]);

  useEffect(() => {
    setItems(allDrugs);
  }, [allDrugs]);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>
  <div className="d-flex mb-2">
    <h2>All Drugs</h2>
  </div>
  <AllDugsSearch setQuery={setQuery} />
  <AllDrugsList items={items} />
</div>
};

export default AllDrugs;
