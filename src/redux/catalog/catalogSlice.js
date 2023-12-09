import { createSlice } from "@reduxjs/toolkit";
import { getCatalogThunk } from "./operations";

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCatalogThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.loading = false;
      })
      .addCase(getCatalogThunk.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(getCatalogThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
