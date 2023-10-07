import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import allDrugService from "./allDrugService";

const initialState = {
  allDrugs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};


// Get allDrug
export const getAllDrug = createAsyncThunk(
  "goals/getAll",
  async (_, thunkAPI) => {
    try {
      return await allDrugService.getAllDrug();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);



export const allDrugSlice = createSlice({
  name: "allDrug",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDrug.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDrug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allDrugs = action.payload;
      })
      .addCase(getAllDrug.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
  },
});

export const { reset } = allDrugSlice.actions;
export default allDrugSlice.reducer;
