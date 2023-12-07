import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Homepage } from "../pages/Homepage";
import { Catalog } from "../pages/Catalog";
import { Favorites } from "../pages/Favorites";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
