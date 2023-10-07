import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import allDrugReducer from "../features/allDrug/allDrugSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    allDrug: allDrugReducer,
  },
});
