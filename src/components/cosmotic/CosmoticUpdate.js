import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "../Spinner";
import { CategoryDb, CompanyDb, usedAreaDb } from "../../data/CosmoticData";
const url = "/api/products";
const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";
const CosmoticUpdate = ({ updateProduct, setUpdatedPoduct }) => {
  const navigate = useNavigate();
  // const [updateCompany, setUpdateCompany] = useState();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Company: updateProduct.Company,
    Category: updateProduct.Category,
    usedArea: updateProduct.usedArea,
  });
  const { Company, Category, usedArea } = formData;
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
        usedArea: usedArea,
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
          <Link
            to={l1 + updateProduct.Description + l2}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red" }}
          >
            Google Pic
          </Link>
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
              {CategoryDb.sort((a, b) => (a.name < b.name ? -1 : 1)).map(
                (c) => (
                  <option key={c._id} value={c.name}>
                    {c.name}
                  </option>
                )
              )}
            </datalist>
          </Form.Group>{" "}
          {/*-------------updateProduct usedArea-----------------*/}{" "}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              id="usedArea"
              name="usedArea"
              defaultValue={usedArea}
              placeholder="Enter usedArea"
              onChange={onChange}
              list="usedArea1"
            />
            <datalist id="usedArea1">
              {usedAreaDb
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map((c) => (
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

      <div className="mt-2">
        <Button variant="success" onClick={() => cancelHandler()}>
          Cancel
        </Button>{" "}
      </div>
    </div>
  );
};

export default CosmoticUpdate;
