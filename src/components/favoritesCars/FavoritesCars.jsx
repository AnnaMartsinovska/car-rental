import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/catalog/selectors";
import Loader from "../loader/Loader";
import { selectFavorite } from "../../redux/favorite/selectors";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";
import { useState } from "react";
import {
  addFavorite,
  deleteFavorite,
} from "../../redux/favorite/favoriteSlice";
import sprite from "../../images/sprite.svg";
import { StyledEmptyText } from "./Favorites.styled";
import {
  StyledCardWraper,
  StyledImg,
  StyledInfo,
  StyledInfoText,
  StyledSvg,
  StyledTextTitle,
  StyledTitleDiv,
} from "../catalog/CatalogCard.styled";
import {
  StyledButton,
  StyledListWrap,
} from "../../pages/Catalog/Catalog.styled";

export const FavoritesCars = ({ dote, handleLoadMore }) => {
  const isLoading = useSelector(selectLoading);
  const favorites = useSelector(selectFavorite);
  const { isOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();
  const [like, setLike] = useState(null);

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
  if (!favorites.length) {
    return <StyledEmptyText>Your list is empty...😐</StyledEmptyText>;
  }

  return (
    <>
      <StyledListWrap>
        {favorites.map((car, index) => {
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
              <StyledButton onClick={() => openModal(car, index)}>
                Learn more
              </StyledButton>
              {isOpen ? (
                <Modal closeModal={closeModal} car={car} index={index} />
              ) : null}
            </StyledCardWraper>
          );
        })}
      </StyledListWrap>
    </>
  );
};
