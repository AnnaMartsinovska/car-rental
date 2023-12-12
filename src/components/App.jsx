import { Route, Routes } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Homepage } from "../pages/Homepage/Homepage";
import { Catalog } from "../pages/Catalog/Catalog";
import { Favorites } from "../pages/Favorites/Favorites";
import { Suspense } from "react";
import Loader from "./loader/Loader";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
