import React, { useState } from "react";

type SliderProps = {
  min: number;
  max: number;
  defaultValue?: number;
};

const Slider: React.FC<SliderProps> = ({ min, max, defaultValue = min }) => {
  const [value, setValue] = useState<number>(defaultValue);

  const calculateSliderColor = (value: number, min: number, max: number) => {
    const percentage = (value - min) / (max - min);
    return `hsl(${120 * (1 - percentage)}, 100%, 50%)`; // 0% (green) to 100% (red)
  };

  const sliderColor = calculateSliderColor(value, min, max);
  const sliderId = "color-changing-slider";

  return (
    <div>
      <style>
        {`
          #${sliderId}::-webkit-slider-thumb {
            background: ${sliderColor};
          }
          #${sliderId}::-moz-range-thumb {
            background: ${sliderColor};
          }
          #${sliderId}::-webkit-slider-runnable-track {
            background: linear-gradient(to right, green, red);
          }
          #${sliderId}::-moz-range-track {
            background: linear-gradient(to right, green, red);
          }
          input[type='range']::-webkit-slider-thumb {
            background: ${sliderColor};
          }
        `}
      </style>
      <input
        id={sliderId}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: "100%", cursor: "pointer" }}
        aria-label="color-changing-slider"
      />
      <div style={{ textAlign: "center" }}>{value}</div>
    </div>
  );
};

export default Slider;
