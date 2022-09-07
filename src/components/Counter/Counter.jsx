import React from "react";
import "./Counter.scss";
const count = document.querySelector(".count");
let number = 0;

const Counter = () => {
  const handleplusOne = () => {
    number++;
    return count.innerHTML = number.toString();
  };
  return (
    <div className="counter">
      <p className="count">0</p>
      <div className="counter__text">
        <button className="counter__sub">-</button>
        <button onClick={handleplusOne} className="counter__add">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
