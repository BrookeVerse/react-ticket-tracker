import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <p>0</p>
      <div className="counter__text">
        <p>-</p>
        <p>+</p>
      </div>
    </div>
  );
};

export default Counter;
