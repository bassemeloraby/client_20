import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import GoogleLink from "../../GoogleLink";

const ScientificName = ({ allDrugs, scientific }) => {
  return (
    <Fragment>
      <div>ScientificName</div>
      {scientific}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Trade Name</th>
            <th>Pharmaceutical Form</th>
            <th>Public Price</th>
          </tr>
        </thead>
        <tbody>
          {allDrugs
            .filter((drug) => drug.ScientificName === scientific)
            .map((drug, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="d-flex justify-content-between">
                  <div>
                    {" "}
                    {drug.TradeName} {drug.Strength} {drug.StrengthUnit}
                  </div>
                  <GoogleLink name={drug} />
                </td>
                <td> {drug.PharmaceuticalForm}</td>
                <td> {drug.PublicPrice} SR</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default ScientificName;
