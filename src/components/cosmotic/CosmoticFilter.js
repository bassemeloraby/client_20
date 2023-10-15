import React, { Fragment, useEffect, useState } from "react";
import { CategoryDb, usedAreaDb } from "../../data/CosmoticData";
// import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const CosmoticFilter = ({ cosmotics, setFilter, filter }) => {
  const [items, setItems] = useState([]);
  const [usedAreaF, setUsedAreaF] = useState("");

  useEffect(() => {
    const filterdata = cosmotics.filter(
      (c) => c.Category === filter && c.usedArea === usedAreaF
    );

    setItems(filterdata);
  }, [cosmotics, filter, usedAreaF]);
  return (
    <Fragment>
      <div className=" mb-2">CosmoticFilter</div>
      {items.length}
      <div className="col-4 mb-2 d-flex">
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFilter(e.target.value)}
          className="me-2"
        >
          <option value="">--Category--</option>
          {CategoryDb.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setUsedAreaF(e.target.value)}
        >
          <option value="">--Used Area--</option>
          {usedAreaDb.map((c, i) => (
            <option key={i} value={c.name}>
              {c.name}
            </option>
          ))}
        </Form.Select>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={i}>
              <td className="text-center">{i + 1}</td>
              <td>{c.Description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default CosmoticFilter;
