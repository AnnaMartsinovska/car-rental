import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalog } from "../../redux/catalog/selectors";
import { getCatalogThunk } from "../../redux/catalog/operations";

import { CatalogCard } from "./CatalogCard";
import { Filters } from "./Filters";

export const Catalog = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const params = {
      page: 1,
      limit,
    };
    dispatch(getCatalogThunk(params));
  }, [dispatch, limit]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 12);
  };

  return (
    <div>
      <Filters />
      <ul>
        {catalog?.map((car) => (
          <CatalogCard car={car} />
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
};
