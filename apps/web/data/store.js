import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/data/slices/productSlice";
import invoiceSlice from "@/data/slices/invoiceSlice";
import { combineReducers } from "redux";
let reducers = combineReducers({
  products: productSlice,
  invoices: invoiceSlice,
});
export const store = configureStore({
  reducer: reducers,
});
