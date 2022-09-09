import React from "react";
import "./TrackerContainer.scss";
import TrackerCard from "../TrackerCard/TrackerCard";

//This function is being held in a cotainer to keep the card component presentational
//This is mapping the the array creating in the app to then prop in the cards
const TrackerContainer = ({employees}) => {
  const employeeCards = employees.map((employee, index) => {
    return <TrackerCard key={index} name={employee.name} role={employee.role} />;
  });
  return <div className="tracker">{employeeCards}</div>;
};

export default TrackerContainer;
