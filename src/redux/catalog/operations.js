import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://6570a23009586eff6641bc9a.mockapi.io",
});

export const getCatalogThunk = createAsyncThunk(
  "getCatalog",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await carsApi.get("/adverts", {
        params: {
          page: page,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
