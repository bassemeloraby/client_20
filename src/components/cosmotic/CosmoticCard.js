import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CosmoticCard = ({ updatedPoduct }) => {
  const navigate = useNavigate();

  const search =()=>{
    navigate(`/cosmotics/cosmoticSearch`);
    window.location.reload();
  }
  return (
    <Fragment>
      <Button variant="primary" onClick={search}>Primary</Button>{" "}
      <Link to="/cosmotics/cosmoticSearch" className="btn btn-primary">
        back to Cosmotic Search
      </Link>
      <div>CosmoticCard</div>
      <h2>{updatedPoduct.Description}</h2>
      <h3>{updatedPoduct.Company}</h3>
      <h3>{updatedPoduct.Category}</h3>
    </Fragment>
  );
};

export default CosmoticCard;
