import { useEffect } from "react";
import { fetchCarsThunk } from "../redux/cars/operations";
import { useDispatch } from "react-redux";

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return <div></div>;
};
