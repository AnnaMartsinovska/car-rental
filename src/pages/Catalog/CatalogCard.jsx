import { useModal } from "../../hooks/useModal";
import Modal from "../../components/modal/Modal";

export const CatalogCard = ({ car }) => {
  const [isOpen, openModal, closeModal] = useModal();

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
      <button onClick={openModal}>Learn more</button>

      {isOpen && <Modal closeModal={closeModal} />}
    </li>
  );
};
