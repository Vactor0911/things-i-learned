import { useState } from "react";

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 2024,
    manufacturer: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (e) => {
    setCar(c => ({...c, year: e.target.value}));
  }

  const handleManufacturerChange = (e) => {
    setCar(c => ({...c, manufacturer: e.target.value}));
  }

  const handleModelChange = (e) => {
    setCar(c => ({...c, model: e.target.value}));
  }

  return (
    <>
      <div>
        <p>Your favorite car is: {car.year} {car.manufacturer} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange} /><br />
        <input type="text" value={car.manufacturer} onChange={handleManufacturerChange} /><br />
        <input type="text" value={car.model} onChange={handleModelChange} /><br />
      </div>
    </>
  );
};

export default MyComponent;
