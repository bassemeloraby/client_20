import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CosmoticCard = ({ afterUpdate }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!afterUpdate) {
      navigate(`/cosmotics`);
    }
  }, [afterUpdate, navigate]);

  return (
    <Fragment>
      <div>CosmoticCard</div>
      {afterUpdate.Description}
      {afterUpdate.Company}
    </Fragment>
  );
};

export default CosmoticCard;
