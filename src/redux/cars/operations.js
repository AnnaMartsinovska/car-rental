import axios from "axios";

axios.defaults.baseURL = "https://6570a23009586eff6641bc9a.mockapi.io";

export const fetchCarsThunk = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/adverts");
    console.log(data);
  } catch (error) {}
};
