import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "../Spinner";
const url = "/api/products";

const CosmoticUpdate = ({ cos, setCos,setAfterUpdate }) => {
  const navigate = useNavigate();
  const [updateCompany, setUpdateCompany] = useState(cos.Company);
  const [loading, setLoading] = useState(false);

  const cancelHandler = (cos) => {
    setCos("");
    navigate(`/cosmotics`);
    console.log(cos);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setUpdateCompany(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.patch(`${url}/${cos._id}`, {
        Company: updateCompany,
      });

      setLoading(false);
      setAfterUpdate(res.data)
      console.log(res.data);
      navigate(`/cosmotics/cosmoticCard`);
      // window.location.reload();
      // // setTimeout(() => {
      // //   navigate(`/cosmotics/cosmoticCard/${cos._id}`);
      // // }, 3000);
      // // window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Spinner />;
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
              <Form.Control placeholder={cos.Company} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Disabled select menu</Form.Label>
              <Form.Select onChange={onChange}>
                <option>no</option>
                <option>avine</option>
                <option>lakalut</option>
                <option>montana</option>
              </Form.Select>
            </Form.Group>{" "}
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
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
