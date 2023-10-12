import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "react-bootstrap/Button";

const CosmoticUpdate = ({ cos, setCos }) => {
  const navigate = useNavigate();

  const cancelHandler = (cos) => {
    setCos("");
    navigate(`/cosmotics`);
    console.log(cos);
  };
  return (
    <div>
      <h2>CosmoticUpdate</h2>
      {cos.Description}
      <div>
        <Button variant="success" onClick={() => cancelHandler(cos)}>
          Update
        </Button>{" "}
      </div>
    </div>
  );
};

export default CosmoticUpdate;
