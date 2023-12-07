import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "",
  price: "",
  mileage: 0,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    findMake: (state, action) => {},
    findPrice: (state, action) => {},
    mileageCheck: (state, action) => {},
  },
});

export const { findMake, findPrice, mileageCheck } = carSlice.actions;

export const carsReducer = carSlice.reducer;
