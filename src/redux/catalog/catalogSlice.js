import { createSlice } from "@reduxjs/toolkit";
import { getCatalogThunk } from "./operations";

const initialState = {
  cars: [],
  loading: false,
  error: null,
  morePages: false,
  liked: false,
  isModalOpen: false,
  selectedCar: null,
  allCar: [],
};

const catalogSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCatalogThunk.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(getCatalogThunk.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCatalogThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
