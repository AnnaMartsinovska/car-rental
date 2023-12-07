import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
