import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";

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
                <td>
                  {drug.TradeName} {drug.Strength} {drug.StrengthUnit} &nbsp;
                  <Link
                    to={
                      l1 +
                      drug.TradeName +
                      drug.Strength +
                      drug.StrengthUnit +
                      l2
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "red" }}
                  >
                    Google Pic
                  </Link>
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
