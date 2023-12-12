import { StyledHeader, StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </StyledHeader>
  );
};
