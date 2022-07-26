import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api_end from "@/utils/api_end";

export const getInvoices = createAsyncThunk(
  "/invoices",
  async (obj, { dispatch, getState }) => {
    return await fetch(
      `${api_end}/invoices?per_page=${getState().invoices.per_page}`
    ).then((res) => res.json());
  }
);

let initialState = {
  data: [],
  status: null,
  per_page: 7,
};
const invoiceSlice = createSlice({
  name: "Invoices",
  initialState: initialState,
  reducers: {
    loadMore(state) {
      // load 10 more invoices and dispath in the state
      state.per_page += 7;
    },
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [getInvoices.pending]: (state, action) => {
      state.status = "loading";
    },
    [getInvoices.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getInvoices.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { loadMore, reset } = invoiceSlice.actions;

export default invoiceSlice.reducer;
