import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
};
