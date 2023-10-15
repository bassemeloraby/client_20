import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Spinner from "../Spinner";

const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";

const CosmoticCard = ({ updatedPoduct }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    navigate(`/cosmotics/cosmoticSearch`);
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
