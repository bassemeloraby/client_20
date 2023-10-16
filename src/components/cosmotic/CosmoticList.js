import { Virtuoso } from "react-virtuoso";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { l1, l2 } from "../../data/UrlData";

const CosmoticList = ({ items, setUpdateProduct }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const editHandler = (prod) => {
    setUpdateProduct(prod);
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
            className="d-flex"
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
            key={prod._id}
          >
            <div className="col-10">
              {" "}
              <h3>{prod.Description}</h3>
              <h6>{prod.Company} </h6>
              <h6>{prod.Category} for {prod.usedArea}</h6>
            </div>
            <div>
             
              <Link
                to={l1 + prod.Description + l2}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red" }}
              >
                Google Pic
              </Link>
            </div>
            {user && (
              <div>
                <Button variant="success" onClick={() => editHandler(prod)}>
                  Edit
                </Button>{" "}
              </div>
            )}
          </div>
        )}
      />{" "}
    </div>
  );
};

export default CosmoticList;
