import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "../Spinner";
import { CategoryDb, CompanyDb } from "../../data/CosmoticData";
const url = "/api/products";

const CosmoticUpdate = ({ updateProduct, setUpdatedPoduct }) => {
  const navigate = useNavigate();
  // const [updateCompany, setUpdateCompany] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Company: updateProduct.Company,
    Category: updateProduct.Category,
  });
  const { Company, Category } = formData;
  const cancelHandler = (cos) => {
    navigate(`/cosmotics/cosmoticSearch`);
    console.log(cos);
  };

  // const onChange = (e) => {
  //   console.log(e.target.value);
  //   setUpdateCompany(e.target.value);
  // };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.patch(`${url}/${updateProduct._id}`, {
        Company: Company,
        Category: Category,
      });

      setLoading(false);
      setUpdatedPoduct(res.data);
      console.log(res.data);
      navigate(`/cosmotics/cosmoticCard`);
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

      <div className="col-8">
        <form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder={updateProduct.Description} disabled />
          </Form.Group>
          {/*---------updateProduct Company---------*/}{" "}
          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              id="Company"
              name="Company"
              defaultValue={Company}
              placeholder="Enter Company"
              onChange={onChange}
              list="Company1"
            />
            <datalist id="Company1">
              {CompanyDb.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </datalist>
          </Form.Group>{" "}
          {/*-------------updateProduct Category-----------------*/}{" "}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              id="Category"
              name="Category"
              defaultValue={Category}
              placeholder="Enter Category"
              onChange={onChange}
              list="Category1"
            />
            <datalist id="Category1">
              {CategoryDb.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </datalist>
          </Form.Group>{" "}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <div>
        <Button variant="success" onClick={() => cancelHandler()}>
          Cancel
        </Button>{" "}
      </div>
    </div>
  );
};

export default CosmoticUpdate;
