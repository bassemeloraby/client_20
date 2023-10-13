import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CosmoticUpdate = ({ cos, setCos }) => {
  const navigate = useNavigate();
  // const [updateCompany, setUpdateCompany] = useState([]);
  const cancelHandler = (cos) => {
    setCos("");
    navigate(`/cosmotics`);
    console.log(cos);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    // setUpdateCompany(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()

    
   
  }

  return (
    <div>
      <h2>CosmoticUpdate</h2>
      {cos.Description}
      <div className="col-6">
        <form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder={cos.Description} disabled />
          </Form.Group>
          <div className="d-flex justify-content-between">
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control placeholder={cos.cosCompany} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select onChange={onChange}>
                <option>avine</option>
                <option>lakalut</option>
                <option>montana</option>
              </Form.Select>
            </Form.Group>{" "}
          </div>
        </form>
      </div>
      <div>
        <Button variant="success" onClick={() => cancelHandler(cos)}>
          Cancel
        </Button>{" "}
      </div>
    </div>
  );
};

export default CosmoticUpdate;
