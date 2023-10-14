import { Virtuoso } from "react-virtuoso";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const CosmoticList = ({ items,setUpdateProduct }) => {
  const navigate = useNavigate();

  const editHandler = (prod) => {
    setUpdateProduct(prod)
    navigate(`/cosmotics/cosmoticUpdate`);
    console.log(prod);
  };

  return (
    <div>
      <Virtuoso
        style={{ height: "600px", background: "#f8f8f8" }}
        data={items}
        totalCount={10500}
        itemContent={(index, prod) => (
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
              <h3>{prod.Description}</h3>
              <h6>{prod.Company} </h6>
              <h6>{prod.Category} </h6>
            </div>
            <div>
              <Button variant="success" onClick={() => editHandler(prod)}>
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
