import axios from "axios";

const API_URL = "/api/allDrugs/";

// Get allDrug
const getAllDrug = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const allDrugService = {
  getAllDrug,
};

export default allDrugService;
