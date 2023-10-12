import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const CosmoticUpdate = ({ cos, setCos }) => {
  const navigate = useNavigate();

  const cancelHandler = (cos) => {
    // setIdlow(cos._id);
    // setDescription(cos._description);
    // setCompany(cos._company);
    setCos("");
    navigate(`/cosmotics`);
    console.log(cos);

    // setLow(cos._id, cos.description, cos.company);
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
