import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ background: color }}>
          <p>
            Selected Color
            <br />
            {color}
          </p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
};

export default ColorPicker;
