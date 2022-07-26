import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api_end from "@/utils/api_end";

export const getProducts = createAsyncThunk(
  "/products",
  async (obj, { dispatch, getState }) => {
    return await fetch(
      `${api_end}/products?per_page=${getState().products.per_page}`
    ).then((res) => res.json());
  }
);

let initialState = {
  data: [],
  status: null,
  per_page: 7,
};
const productSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {
    loadMore(state) {
      // load 10 more player and dispath in the state
      state.per_page += 7;
    },
    reset(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});
export const { loadMore, reset } = productSlice.actions;

export default productSlice.reducer;
