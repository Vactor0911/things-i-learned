import { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      manufacturer: carManufacturer,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarManufacturer("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, idx) => idx !== index));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const HandleCarManufacturerChange = (e) => {
    setCarManufacturer(e.target.value);
  };

  const HandleCarModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.manufacturer} {car.model}
            </li>
          ))}
        </ul>
        <input
          type="number"
          value={carYear}
          onChange={handleYearChange}
          placeholder="Enter car year"
        />
        <br />
        <input
          type="text"
          value={carManufacturer}
          onChange={HandleCarManufacturerChange}
          placeholder="Enter car manufacturer"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={HandleCarModelChange}
          placeholder="Enter car model"
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
};

export default MyComponent;
