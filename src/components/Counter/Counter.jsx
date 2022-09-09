import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  //This is where the counter state is held
const [counter, setCounter] = useState(0);

//This function is what sets the counter to go incriment
  const handleIncriment = () => {
    setCounter(counter + 1);
  };
  //This function is what is setting the decrease and not allowing it to go below zero
  const handleDecrement = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter - 1);
  };

  //This is the template for the counter and how it is using the props to be used.
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
