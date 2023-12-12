import { BounceLoader } from "react-spinners";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <BounceLoader color="#0B44CD" />
    </StyledLoader>
  );
};

export default Loader;
