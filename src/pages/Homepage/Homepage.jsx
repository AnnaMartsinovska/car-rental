import {
  StyledBackground,
  StyledHomeImg,
  StyledHomeText,
  StyledListItems,
} from "./Homepage.styled";

export const Homepage = () => {
  return (
    <StyledBackground>
      <StyledHomeImg
        src="https://vikna.if.ua/assets/gallery/2022/03/27/132048/1648366105_183869d18ea2f7af61df.jpg"
        alt="Car keys"
      />
      <StyledHomeText>
        <h1>Auto Rental Service</h1>
        <p>
          Welcome to "Auto Rental Service" - your best choice for travels
          throughout Ukraine. We offer a wide range of services to meet your
          transportation needs in any city or town.
        </p>
        <p>Our services include:</p>
        <StyledListItems>
          <li>Rental of passenger cars</li>
          <li>
            Rental of <span>premium</span> class cars for those who appreciate
            comfort and luxury
          </li>
          <li>Flexible rates for your individual needs</li>
          <li>Delivery of the car to your specified location</li>
          <li>24/7 support and assistance on the road</li>
        </StyledListItems>
        <p>
          Whether you're on a business trip, visiting landmarks, or just need
          transportation for daily tasks, we're always here to make your
          journeys convenient and worry-free.
        </p>
      </StyledHomeText>
    </StyledBackground>
  );
};
