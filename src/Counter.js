import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");

  const increment = () => {
    setValue(value + 1);
    setError("");
  };

  const decrement = () => {
    if (value <= 0) {
      setError("Negative Value Not Allowed!");
    } else {
      setValue(value - 1);
      setError("");
    }
  };
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h2 className="counterValue">{value}</h2>
      <div className="btnContainter">
        <div className="incrementText">
          <button onClick={increment} className="counterBtn">
            +
          </button>
        </div>
        <div className="incrementText">
          <button onClick={decrement} className="counterBtn">
            -
          </button>
        </div>
        
      </div>
      {error && <p className="counterError">{error}</p>}
    </div>
  );
};

export default Counter;
