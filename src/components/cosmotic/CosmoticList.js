import { Virtuoso } from "react-virtuoso";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const l1 = "https://www.google.com/search?q=";
const l2 =
  "&sca_esv=571711580&rlz=1C1VDKB_enSA1075SA1075&tbm=isch&sxsrf=AM9HkKkhm2K1JYgiDZSvrn-lnYR52Xi5vA:1696763801819&source=lnms&sa=X&ved=2ahUKEwj18LLdqeaBAxXD2wIHHfNMAzMQ_AUoAXoECAQQAw&biw=1366&bih=641&dpr=1";

const CosmoticList = ({ items, setUpdateProduct }) => {
  const navigate = useNavigate();

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
              <h6>
                {prod.Category}{" "}
                <Link
                  to={l1 + prod.Description + l2}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red" }}
                >
                  Google Pic
                </Link>
              </h6>
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
