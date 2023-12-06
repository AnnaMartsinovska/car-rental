import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Routes>
        <Route path="/" element={<></>}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/catalog" element={<h1>Catalog</h1>} />
          <Route path="/favorites" element={<h1>Favorites</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
