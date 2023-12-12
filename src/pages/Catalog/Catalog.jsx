import { useEffect, useState } from "react";
import { getCatalogThunk } from "../../redux/catalog/operations";
import { CatalogCard } from "../../components/catalog/CatalogCard";
import { Filters } from "../../components/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalog } from "../../redux/catalog/selectors";
import { ButtonWrap, StyledLoadMore } from "./Catalog.styled";

export const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    const params = {
      page,
      limit: 12,
    };
    dispatch(getCatalogThunk(params));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Filters />
      <CatalogCard handleLoadMore={handleLoadMore} />
      {catalog.length >= 32 ? null : (
        <ButtonWrap>
          <StyledLoadMore type="button" onClick={handleLoadMore}>
            Load more
          </StyledLoadMore>
        </ButtonWrap>
      )}
    </>
  );
};
