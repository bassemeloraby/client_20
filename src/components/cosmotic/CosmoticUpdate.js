import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { l1, l2 } from "../../data/UrlData";
import { CategoryDb, CompanyDb, usedAreaDb } from "../../data/CosmoticData";
import axios from "axios";
import Spinner from "../Spinner";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const url = "/api/products";

const CosmoticUpdate = ({ setUpdatedPoduct, user, cosmotics }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Company: "",
    Category: "",
    use1: "",
    use2: "",
  });

  const { Company, Category, use1, use2 } = formData;
  const cancelHandler = (cos) => {
    navigate(`/cosmotics/cosmoticSearch`);
    console.log(cos);
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
        usedArea: use1 + "," + use2,
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

      {cosmotics
        .filter((c) => c._id === id)
        .map((c, i) => (
          <div className="col-8" key={i}>
            {" "}
            <form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder={c.Description} disabled />
              </Form.Group>
              <Link
                to={l1 + c.Description + l2}
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
                  defaultValue={c.Company}
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
                  defaultValue={c.Category}
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
                <Form.Label>Used Area</Form.Label>
                <Form.Control
                  type="text"
                  id="usedArea"
                  name="usedArea"
                  defaultValue={c.usedArea}
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Lip"
                  id="flexCheckDefault"
                  onChange={onChange}
                  name="use1"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lip
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Vaginal"
                  id="flexCheckChecked"
                  onChange={onChange}
                  name="use2"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Vaginal
                </label>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        ))}

 
      <div className="mt-2">
        <Button variant="success" onClick={() => cancelHandler()}>
          Cancel
        </Button>{" "}
      </div>
    </div>
  );
};

export default CosmoticUpdate;
