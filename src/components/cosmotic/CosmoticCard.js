import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "../Spinner";
import { l1, l2 } from "../../data/UrlData";

const CosmoticCard = ({ updatedPoduct }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticSearch`);
    window.location.reload();
    setLoading(false);
  };
  const filter = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticFilter`);
    window.location.reload();
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Button variant="primary" onClick={search}>
        Cosmotic Search
      </Button>{" "}
      <Button variant="primary" onClick={filter}>
        Cosmotic Filter
      </Button>{" "}
      <div>CosmoticCard</div>
      <h2>{updatedPoduct.Description}</h2>
      <h3>{updatedPoduct.Company}</h3>
      <h3>{updatedPoduct.Category}</h3>
      <h3>{updatedPoduct.usedArea}</h3>
      <Link
        to={l1 + updatedPoduct.Description + l2}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "red" }}
      >
        Google Pic
      </Link>
    </Fragment>
  );
};

export default CosmoticCard;
