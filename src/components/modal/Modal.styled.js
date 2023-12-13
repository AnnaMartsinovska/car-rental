import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  background-color: #fafafa;
  border: 1px solid #12141780;
  padding: 37px;
  overflow: hidden;
  border-radius: 30px;
  width: 541px;
  height: 752px;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  max-width: 100%;

  z-index: 1200;
`;

export const StyledSvgUser = styled.svg`
  stroke: #121417;
  &:hover,
  &:focus {
    stroke: #12141780;
    transition: background-color 500ms ease-in-out;
    transform: scale(1.2);
  }
`;

export const StyledRentalBtn = styled.button`
  display: block;
  border: none;
  padding: 12px 50px;
  min-width: 168px;
  border-radius: 12px;
  margin: 0 auto;
  color: #fafafa;
  background-color: #3470ff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export const StyledModalContent = styled.ul`
  display: flex;
`;
export const StyledImage = styled.img`
  object-fit: cover;
  width: 469px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const SpanModal = styled.span`
  font-family: Montserrat;
  font-weight: 600;
  color: #3470ff;
`;
export const StyledCarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 360px;
  margin-bottom: 14px;
`;
export const StyledProperty = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 4px;

  &::before {
    content: "\u00a0";
  }

  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const StyledDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-size: 10px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-bottom: 24px;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

  &:not(:last-child) {
    border-right: none;
  }
`;
export const StyledBoxAccessories = styled.div`
  width: 340px;
  margin-bottom: 24px;
`;

export const StyledAccessories = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledSpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
`;
export const RentalList = styled.ul`
  padding-left: 0px;
`;

export const StyledRental = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const RentalDiv = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 0px;
  margin-bottom: 8px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;
  gap: 8px;
  border-radius: 35px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: #363535;
  background: #f9f9f9;

  span {
    color: #3470ff !important;
  }
`;

export const RentalDetails = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;
export const StyledImgBox = styled.div`
  position: relative;
  display: inline-block;
`;
export const StyledInfoTitle = styled.div`
  width: 270px;
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`;
export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledLinkNumber = styled.a`
  text-decoration: none;
  color: #fafafa;
`;
