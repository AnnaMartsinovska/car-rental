import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page is not found!</h1>
      <h2>
        You can go to <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;
