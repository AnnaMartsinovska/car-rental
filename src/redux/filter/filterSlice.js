import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    make: "",
    rentalPrice: 0,
    mileageFrom: 0,
    mileageTo: 0,
  },
  allCar: [],
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterMake: (state, { payload }) => {
      state.filter.make = payload;
    },
    filterPrice: (state, { payload }) => {
      state.filter.rentalPrice = payload;
    },
    filterMileageFrom: (state, { payload }) => {
      state.filter.mileageFrom = Number(payload);
    },
    filterMileageTo: (state, { payload }) => {
      state.filter.mileageTo = Number(payload);
    },
  },
});

export const { filterMake, filterPrice, filterMileageFrom, filterMileageTo } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
