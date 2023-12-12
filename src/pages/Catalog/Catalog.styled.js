import styled from "styled-components";

export const StyledListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  row-gap: 50px;
  flex-wrap: wrap;
`;

export const StyledCardWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  border: none;
  color: #fafafa;
  background: #3470ff;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const StyledLoadMore = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: underline;
  border: none;
  color: #3470ff;
  background: transparent;
  cursor: pointer;
  margin-top: 100px;
  margin-bottom: 70px;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
