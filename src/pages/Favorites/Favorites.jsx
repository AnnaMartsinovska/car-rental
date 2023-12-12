import { FavoritesCars } from "../../components/favoritesCars/FavoritesCars";
import { Filters } from "../../components/filters/Filters";

export const Favorites = () => {
  const dote = (distance) => {
    const numberTuString = distance.toString();
    const distanceDote = numberTuString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return distanceDote;
  };

  return (
    <>
      <Filters />
      <FavoritesCars dote={dote} />
    </>
  );
};
