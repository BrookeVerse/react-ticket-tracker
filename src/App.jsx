import "./App.scss";
import Heading from "./components/Heading/Heading";
import TrackerContainer from "./components/TrackerContainer/TrackerContainer";
import FormButton from "./components/FormButton/FormButton";
import employeeArr from "./assets/data/employee"
import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employees, setEmployee] = useState ([...employeeArr]);
  
  //Form Props
  const handleFullName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value
    const role = event.target[1].value
    setEmployee(employees.concat([{
      name: name,
      role: role
    }]))
  };

  return (
    <div className="app">
      <div className="heading">
        <Heading />
      </div>
      <div>
        <FormButton handleRole={handleRole} handleFullName={handleFullName} handleSubmit={handleSubmit}/> 
      </div>
      <div className="trackerContainer">
        <TrackerContainer employees={employees}/>
      </div>
    </div>
  );
}

export default App;
