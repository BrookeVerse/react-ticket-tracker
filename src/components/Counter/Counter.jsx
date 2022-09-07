import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
const [counter, setCounter] = useState(0);

  const handleIncriment = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <p className="count">{counter}</p>
      <div className="counter__text">
        <div onClick={handleDecrement}>
          <button className="counter__sub">-</button>
        </div>
        <div onClick={handleIncriment}>
          <button className="counter__add">+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
