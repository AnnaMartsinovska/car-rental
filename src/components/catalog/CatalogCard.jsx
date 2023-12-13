import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import { useState } from "react";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/favorite/favoriteSlice";
import { selectFavorite } from "../../redux/favorite/selectors";
import { selectCatalog, selectLoading } from "../../redux/catalog/selectors";
import Loader from "../../components/loader/Loader";
import {
  StyledCardWraper,
  StyledImg,
  StyledInfo,
  StyledInfoText,
  StyledSvg,
  StyledTextTitle,
  StyledTitleDiv,
} from "./CatalogCard.styled";
import { useModal } from "../../hooks/useModal";
import {
  selectMake,
  selectMileageFrom,
  selectMileageTo,
  selectPrice,
} from "../../redux/filter/selectors";
import {
  StyledButton,
  StyledListWrap,
} from "../../pages/Catalog/Catalog.styled";
import Modal from "../modal/Modal";

export const CatalogCard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const favorites = useSelector(selectFavorite);
  const [like, setLike] = useState(null);
  const catalog = useSelector(selectCatalog);
  const { isOpen, openModal, closeModal } = useModal();
  const carsPrice = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const filterValue = useSelector(selectMake);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModalCar = (car, index) => {
    setSelectedCar({ car, index });
    openModal();
  };

  const getFilteredCars = () => {
    let filteredCars = catalog.slice();
    if (filterValue) {
      filteredCars = filteredCars.filter((car) =>
        car.make.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
    } else {
      alert("No search results, enter make");
    }

    if (carsPrice) {
      filteredCars = filteredCars.filter(
        (car) => parseFloat(car.rentalPrice.replace("$", "")) <= carsPrice
      );
    } else {
      alert("No search results, enter rentalPrice");
    }

    if (mileageFrom) {
      filteredCars = filteredCars.filter(
        (car) =>
          Number(car.mileage) >= mileageFrom && Number(car.mileage) <= mileageTo
      );
    } else {
      alert("No search results, enter mileageFrom, mileageTo ");
    }
    return filteredCars;
  };

  const toggleFavorites = (car, index) => {
    const setFavorite = favorites.some((fav) => fav.id === car.id);
    if (setFavorite) {
      dispatch(deleteFavorite(car));
      setLike(null);
    } else {
      dispatch(addFavorite(car));
      setLike(index);
    }
  };

  const dote = (distance) => {
    const numberTuString = distance.toString();
    const distanceDote = numberTuString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return distanceDote;
  };

  return (
    <>
      <StyledListWrap>
        {(filterValue || carsPrice || mileageFrom || mileageTo
          ? getFilteredCars()
          : catalog
        ).map((car, index) => {
          const isFavorite = favorites.some((favCar) => favCar.id === car.id);
          return (
            <StyledCardWraper key={index}>
              {isLoading ? (
                <Loader />
              ) : (
                <StyledImg src={car.img} alt={car.make} />
              )}
              <StyledSvg
                width="24"
                height="24"
                $like={isFavorite || like === index}
                onClick={() => toggleFavorites(car, index)}
              >
                <use href={`${sprite}#icon-like`} />
              </StyledSvg>
              <StyledTitleDiv>
                <div>
                  <StyledTextTitle>{car.make}&nbsp;</StyledTextTitle>
                  <StyledTextTitle>
                    <span>{car.model}</span>,&nbsp;
                  </StyledTextTitle>
                  <StyledTextTitle>{car.year}</StyledTextTitle>
                </div>
                <StyledTextTitle>{car.rentalPrice}</StyledTextTitle>
              </StyledTitleDiv>
              <StyledInfo>
                <StyledInfoText>
                  {car.address.split(" ")[car.address.split(" ").length - 1]} |
                </StyledInfoText>
                <StyledInfoText>{car.rentalCompany} |</StyledInfoText>
                <StyledInfoText>{car.type} |</StyledInfoText>
                <StyledInfoText>{car.model} |</StyledInfoText>
                <StyledInfoText>{dote(car.mileage)} |</StyledInfoText>
                <StyledInfoText>{car.functionalities[0]} |</StyledInfoText>
              </StyledInfo>
              <StyledButton
                type="button"
                onClick={() => openModalCar(car, index)}
              >
                Learn more
              </StyledButton>
              {isOpen && selectedCar && selectedCar.index === index ? (
                <Modal closeModal={closeModal} car={car} index={index} />
              ) : null}
            </StyledCardWraper>
          );
        })}
      </StyledListWrap>
    </>
  );
};
