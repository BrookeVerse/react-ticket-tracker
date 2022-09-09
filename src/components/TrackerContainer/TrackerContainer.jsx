import React from "react";
import "./TrackerContainer.scss";
import TrackerCard from "../TrackerCard/TrackerCard";

const TrackerContainer = ({employees}) => {
  const employeeCards = employees.map((employee, index) => {
    return <TrackerCard key={index} name={employee.name} role={employee.role} />;
  });
  return <div className="tracker">{employeeCards}</div>;
};

export default TrackerContainer;
