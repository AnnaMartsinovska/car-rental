import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  border-bottom: 2px solid blue;
  height: 80px;
  background-color: lightskyblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 35px;
  font-weight: bold;
  color: aliceblue;
  text-shadow: 2px 2px 4px #000000;
  margin-right: 80px;

  &:hover,
  &:focus {
    color: gray;
  }
`;
