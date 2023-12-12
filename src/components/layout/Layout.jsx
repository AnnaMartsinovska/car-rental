import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";
import { StyledOutlet } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </>
  );
};
