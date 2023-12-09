export const CatalogCard = ({ car }) => {
  return (
    <li key={car.id}>
      <img src={car.img} alt={car.make} />
      <h2>
        {car.make} {car.model}, {car.year}
      </h2>
      <h2>{car.rentalPrice}</h2>
      <p>
        {car.address}
        {car.rentalCompany}
        {car.type}
        {car.model}
        {car.mileage}
        {car.functionalities[0]}
      </p>
      <button>Learn more</button>
    </li>
  );
};
