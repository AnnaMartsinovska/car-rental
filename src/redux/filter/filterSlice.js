import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  favorites: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filtering: (state, { payload }) => {
      state.filter = payload;
    },
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    deleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== payload.id);
    },
  },
});

export const { filtering, addFavorite, deleteFavorite } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
