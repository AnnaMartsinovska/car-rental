import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  column-gap: 8px;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-height: 64px;
`;

export const StyledInput = styled.input`
  max-width: 160px;
  padding: 14px 75px 14px 24px;
  max-height: 64px;
  font-size: 18px;
  line-height: 1.13;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
`;

export const StyledInputWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledFormWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const StyledButtonSearch = styled.button`
  height: 50px;
  width: 135px;
  place-self: flex-end;
  border-radius: 12px;
  padding: 0;
  background: #3470ff;
  border: none;
  color: white;
  cursor: pointer;
  background: #3470ff;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`;
