import React from "react";
import "./TrackerCard.scss";
import CounterContainer from "../CounterContainer/CounterContainer";

//This is the template for the cards and what info it should use from the parent. 
//including another compenent for the counter.
const TrackerCard = (props) => {
  const {name, role} = props
  return (
    <div className="trackerCard">
      <h3 className="trackerCard__heading"> {name} </h3>
      <h3 className="trackerCard__heading"> {role} </h3>
      <CounterContainer />
    </div>
  );
};

export default TrackerCard;
