import React, { Fragment } from "react";
import { CategoryDb } from "../../data/CosmoticData";
import Button from "react-bootstrap/Button";

const CosmoticFilter = ({ cosmotics, setFilter, filter }) => {
  return (
    <Fragment>
      <div>CosmoticFilter</div>
      {CategoryDb.map((c, i) => (
        <Button
          variant="info"
          className="me-2 mb-2"
          key={i}
          onClick={() => setFilter(c.name)}
        >
          {c.name}
        </Button>
      ))}

      {cosmotics
        .filter((c) => c.Category === filter)
        .map((c, i) => (
          <h4 key={i}>{c.Description}</h4>
        ))}
    </Fragment>
  );
};

export default CosmoticFilter;
