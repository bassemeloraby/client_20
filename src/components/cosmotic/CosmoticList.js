import { Virtuoso } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const CosmoticList = ({ items, setCos }) => {
  const navigate = useNavigate();

  const editHandler = (cos) => {
    setCos(cos);
    navigate(`/cosmotics/cosmoticUpdate`);
    console.log(cos);
  };

  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10500}
        itemContent={(index, cos) => (
          <div
            className="d-flex justify-content-between"
            style={{
              background: index % 2 === 0 ? "#00bfff" : "#ffcc99",
              color: "#333",
              padding: "10px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              border: "1px solid #ccc",
              borderRadius: "5px",
              margin: "5px 0",
            }}
          >
            <div>
              {" "}
              <h3>{cos.Description}</h3>
              <h6>{cos.cosCompany} </h6>
            </div>
            <div>
              <Button variant="success" onClick={() => editHandler(cos)}>
                Edit
              </Button>{" "}
            </div>
          </div>
        )}
      />{" "}
    </div>
  );
};

export default CosmoticList;
