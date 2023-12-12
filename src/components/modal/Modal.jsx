import ReactDOM from "react-dom";
import React, { useCallback, useEffect } from "react";
import sprite from "../../images/sprite.svg";
import {
  ContentWrapper,
  RentalDetails,
  RentalDiv,
  RentalItem,
  RentalList,
  StyledAccessories,
  StyledBoxAccessories,
  StyledCarInfo,
  StyledCloseButton,
  StyledDescription,
  StyledImage,
  StyledImgBox,
  StyledInfoTitle,
  StyledItem,
  StyledModalContent,
  StyledProperty,
  StyledRental,
  StyledRentalBtn,
  StyledSpan,
  StyledSvgUser,
  StyledWrapper,
} from "./Modal.styled";

const rootModal = document.querySelector("#modal");

const Modal = ({ closeModal, car, index }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal, handleKeyDown]);

  const handleBackDrop = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      closeModal();
    }
  };

  const formatMileage = (mileage) => {
    const numberString = mileage.toString();
    const formattedMileage = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedMileage;
  };

  const highlightRentalConditions = (text) => {
    const conditionsRegex = /(\s*\d+)/g;
    const parts = text.split(conditionsRegex);

    const highlightedElements = parts.map((part, index) =>
      conditionsRegex.test(part) ? (
        <span
          key={index}
          style={{
            color: "#3470ff",
            fontWeight: "600",
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );

    return <>{highlightedElements}</>;
  };

  return ReactDOM.createPortal(
    <StyledWrapper onClick={handleBackDrop}>
      <ContentWrapper>
        <StyledCloseButton onClick={closeModal}>
          <StyledSvgUser width="24" height="24">
            <use href={`${sprite}#icon-close`} />
          </StyledSvgUser>
        </StyledCloseButton>

        <StyledModalContent>
          <StyledItem key={`${car?.id}-${index}`}>
            <StyledImgBox>
              {car && <StyledImage src={car?.img} alt={car?.make} />}
            </StyledImgBox>
            <StyledInfoTitle>
              <p>
                {car?.make} <span> {car?.model}</span>, {car?.year}
              </p>
            </StyledInfoTitle>
            <StyledCarInfo>
              <StyledProperty>
                {car?.address.split(" ")[car?.address.split(" ").length - 2]}
              </StyledProperty>
              <StyledProperty>
                {car?.address.split(" ")[car?.address.split(" ").length - 1]}
              </StyledProperty>
              <StyledProperty>id: {car?.id}</StyledProperty>
              <StyledProperty>Year: {car?.year}</StyledProperty>
              <StyledProperty>Type: {car?.type}</StyledProperty>
              <StyledProperty>
                Fuel consumption: {car?.fuelConsumption}
              </StyledProperty>
              <StyledProperty>Engine size: {car?.engineSize}</StyledProperty>
            </StyledCarInfo>

            <StyledDescription>{car?.description}</StyledDescription>

            <StyledBoxAccessories>
              <StyledAccessories>
                Accessories and functionalities:
              </StyledAccessories>

              <StyledSpan>{car?.accessories.join(" | ")}</StyledSpan>
              <StyledSpan>{car?.functionalities.join(" | ")}</StyledSpan>
            </StyledBoxAccessories>

            <div>
              <RentalList>
                <StyledRental>Rental conditions:</StyledRental>

                <RentalDiv>
                  {car?.rentalConditions.split("\n").map((condition, index) => (
                    <RentalItem key={index}>
                      {highlightRentalConditions(condition)}
                    </RentalItem>
                  ))}
                </RentalDiv>

                <RentalDetails>
                  <RentalItem>
                    {" "}
                    Price:{" "}
                    <span>{car?.rentalPrice.replace("$", "") + "$"}</span>
                  </RentalItem>
                  <RentalItem>
                    {" "}
                    Mileage: <span>{formatMileage(car?.mileage)}</span>
                  </RentalItem>
                </RentalDetails>
              </RentalList>
            </div>

            <a href="tel:+380730000000">
              <StyledRentalBtn type="button">Rental car</StyledRentalBtn>
            </a>
          </StyledItem>
        </StyledModalContent>
      </ContentWrapper>
    </StyledWrapper>,
    rootModal
  );
};

export default Modal;
