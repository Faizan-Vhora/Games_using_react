import React, { useState } from "react";

function ShapeGame() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Calculate the transformation based on slider value
  const angle = 90 + (sliderValue / 100) * 90; // From 90° to 180°
  const transform = `skewY(${angle - 90}deg)`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Transforming Rhombus</h1>
      <div
        className="relative w-64 h-64"
        style={{
          transform,
          transformOrigin: "center",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, cadetblue 50%, darkcyan 50%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-64 mt-6"
      />
      <div className="mt-2">
        <span className="text-xl font-bold">Slider Value: {sliderValue}</span>
      </div>
    </div>
  );
}

export default ShapeGame;
