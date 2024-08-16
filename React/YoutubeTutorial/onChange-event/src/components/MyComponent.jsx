import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
      </div>
    </>
  );
};

export default MyComponent;
