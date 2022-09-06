import React from "react";
import "./TrackerCard.scss";
import CounterContainer from "../CounterContainer/CounterContainer";

const TrackerCard = (props) => {
  return (
    <div className="trackerCard">
      <h3 className="trackerCard__heading"> {props.name} </h3>
      <h3 className="trackerCard__heading"> {props.role} </h3>
      <CounterContainer />
    </div>
  );
};

export default TrackerCard;
