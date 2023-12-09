import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatalogThunk } from "../redux/cars/operations";
import { selectCatalog } from "../redux/cars/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(getCatalogThunk(1, 12));
  }, [dispatch]);

  return (
    <ul>
      {catalog?.map((car) => (
        <li key={car.id}>
          <img src={car.img} alt={car.make} />
          <h2>
            {car.make} {car.model}, {car.year}
          </h2>
          <h2>{car.rentalPrice}</h2>
        </li>
      ))}
    </ul>
  );
};
