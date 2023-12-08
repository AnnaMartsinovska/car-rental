import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // make: "",
  // price: "",
  // mileage: 0,
  cars: [],
};

const catalogSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    findMake: (state, action) => {},
    findPrice: (state, action) => {},
    mileageCheck: (state, action) => {},
  },
});

export const { findMake, findPrice, mileageCheck } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
