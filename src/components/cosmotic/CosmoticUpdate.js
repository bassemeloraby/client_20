import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CategoryDb, CompanyDb, usedAreaDb } from "../../data/CosmoticData";
import axios from "axios";
import Spinner from "../Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleLink from "../GoogleLink";

const url = "/api/products";
// -------------------------------CosmoticUpdate components---------------------------------//
const CosmoticUpdate = ({
  setUpdatedPoduct,
  user,
  cosmotics,
  updateProduct,
}) => {
  // main constants
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Company: updateProduct.Company,
    Category: updateProduct.Category,
    usedArea: updateProduct.usedArea,
    use1: "",
    use2: "",
  });

  const { Company, Category, usedArea, use1, use2 } = formData;
  // -----------functions-------------//
  const cancelHandler = () => {
    navigate(`/cosmotics/cosmoticSearch`);
    console.log();
  };

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
      const res = await axios.patch(`${url}/${id}`, {
        Company: Company,
        Category: Category,
        usedArea: use1 + " " + use2,
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
  // ----------useEffect--------//
  useEffect(() => {
    if (!updateProduct) {
      navigate("/");
    }
  }, [updateProduct, navigate]);
  // --------------------loading--------//
  if (loading) {
    return <Spinner />;
  }
  // ------------------------------------CosmoticUpdate components -----------------//
  return (
    <div>
      {/*-----------------header page-----------------*/}
      <h2>CosmoticUpdate</h2>
      {/*-----------------cancel section-----------------*/}
      <div className="mb-2">
        <Button variant="success" onClick={() => cancelHandler()}>
          Cancel
        </Button>{" "}
      </div>
      {/*-----------------update form-----------------*/}
      {cosmotics
        .filter((c) => c._id === id)
        .map((c, i) => (
          <div
            className="text-light p-2 mb-2"
            key={c._id}
            style={{ backgroundColor: "brown" }}
          >
            {" "}
            <form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder={c.Description} disabled />
              </Form.Group>
              <GoogleLink color="white" name={c} />
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
                  {CompanyDb.map((c, i) => (
                    <option key={i} value={c.name}>
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
                    (c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    )
                  )}
                </datalist>
              </Form.Group>{" "}
              {/*-------------updateProduct usedArea-----------------*/}{" "}
              <Form.Group className="mb-3">
                <Form.Label>Used Area</Form.Label>
                <Form.Control
                  type="text"
                  id="usedArea"
                  name="usedArea"
                  defaultValue={usedArea}
                  placeholder="Enter usedArea"
                  onChange={onChange}
                  disabled
                />
              </Form.Group>{" "}
              {/*-------------usedArea select-----------------*/}{" "}
              <div className="usedAreaSelect d-flex p-1">
                {" "}
                {/*-------------used1 select-----------------*/}{" "}
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="use1"
                >
                  <option>use1</option>
                  {usedAreaDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
                {/*-------------used2 select-----------------*/}{" "}
                <Form.Select
                  aria-label="Default select example"
                  onChange={onChange}
                  name="use2"
                >
                  <option>use2</option>
                  {usedAreaDb
                    .sort((a, b) => (a.name < b.name ? -1 : 1))
                    .map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                </Form.Select>
              </div>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default CosmoticUpdate;
