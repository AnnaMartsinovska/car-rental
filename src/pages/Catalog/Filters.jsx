const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const prices = [
  { value: "$10", label: "10" },
  { value: "$20", label: "20" },
  { value: "$30", label: "30" },
  { value: "$40", label: "40" },
  { value: "$50", label: "50" },
  { value: "$60", label: "60" },
  { value: "$70", label: "70" },
  { value: "$80", label: "80" },
  { value: "$90", label: "90" },
  { value: "$100", label: "100" },
  { value: "$110", label: "110" },
  { value: "$120", label: "120" },
  { value: "$130", label: "130" },
  { value: "$140", label: "140" },
  { value: "$150", label: "150" },
  { value: "$160", label: "160" },
  { value: "$170", label: "170" },
  { value: "$180", label: "180" },
  { value: "$190", label: "190" },
  { value: "$200", label: "200" },
];

export const Filters = () => {
  return (
    <div>
      <p>Car brand</p>
      <select name="carBrand" id="carBrand" defaultValue="">
        <option value="" disabled>
          Enter the text
        </option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
      <p>Price / 1 hour</p>
      <select name="price" id="price" defaultValue="">
        <option value="" disabled>
          To $
        </option>
        {prices.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Car mileage / km</p>
      <input type="text" />
      <input type="text" />
      <button>Search</button>
    </div>
  );
};
