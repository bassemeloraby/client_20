import React, { Fragment, useEffect, useState } from "react";
import { CategoryDb, usedAreaDb } from "../../data/CosmoticData";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {  useNavigate } from "react-router-dom";
import GoogleLink from "../GoogleLink";
const CosmoticFilter = ({ cosmotics,user,setUpdateProduct }) => {

  const [filterKind, setFilterKind] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openUsedArea, setOpenUsedArea] = useState(false);
  const [items, setItems] = useState(cosmotics);
  const [categoryFilter, setCategoryFilter] = useState();
  const [usedAreaFilter, setUsedAreaFilter] = useState();
 const navigate = useNavigate();

  useEffect(() => {
    if (filterKind === "no") {
      setOpenCategory(false);
      setOpenUsedArea(false);
    }
    if (filterKind === "Category") {
      setOpenCategory(true);
      setOpenUsedArea(false);
      const filterdata = cosmotics.filter((c) => c.Category === categoryFilter);

      setItems(filterdata);
    }
    if (filterKind === "usedArea") {
      setOpenCategory(false);
      setOpenUsedArea(true);
      const filterdata = cosmotics.filter((c) => c.usedArea === usedAreaFilter);

      setItems(filterdata);
    }
    if (filterKind === "all") {
      setOpenCategory(true);
      setOpenUsedArea(true);
      const filterdata = cosmotics.filter(
        (c) => c.usedArea === usedAreaFilter && c.Category === categoryFilter
      );

      setItems(filterdata);
    }
  }, [categoryFilter, cosmotics, usedAreaFilter, filterKind]);

  const editHandler = (prod) => {
    setUpdateProduct(prod);
    navigate(`/cosmotics/cosmoticUpdate`);
    console.log(prod);
  };

  return (
    <Fragment>
      <div className=" mb-2">
        <h3>Cosmotic Filter {items.length}</h3>
      </div>

      <section className="filterKind mb-2 col-3">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFilterKind(e.target.value)}
          className="me-2"
        >
          <option value="no">no</option>
          <option value="Category">Category</option>
          <option value="usedArea">Used Area</option>
          <option value="all">and</option>
        </Form.Select>
      </section>

      <section
        className="filters d-flex p-2"
        style={{ backgroundColor: "brown" }}
      >
        {/*-----------Category filter------------*/}
        <div className="me-2">
          {openCategory && (
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategoryFilter(e.target.value)}
              className=""
            >
              <option value="">--Category--</option>
              {CategoryDb.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          )}
        </div>
        {/*-----------usedArea filter------------*/}
        <div className="">
          {openUsedArea && (
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setUsedAreaFilter(e.target.value)}
            >
              <option value="">--Used Area--</option>
              {usedAreaDb.map((c, i) => (
                <option key={i} value={c.name}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          )}
        </div>
      </section>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={c._id}>
              <td className="text-center">{i + 1}</td>
              <td className="d-flex justify-content-between"><span>{c.Description}</span> <GoogleLink name={c}/></td>
              <td>{user && (
                <div>
                  <Button variant="success" onClick={() => editHandler(c)}>
                    Edit
                  </Button>{" "}
                </div>
              )}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default CosmoticFilter;
