import "./App.scss";
import Heading from "./components/Heading/Heading";
import TrackerContainer from "./components/TrackerContainer/TrackerContainer";
import FormButton from "./components/FormButton/FormButton";
import employeeArr from "./assets/data/employee"
import React, { useState } from "react";

function App() {
  // Changing states to be used in other components
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employees, setEmployee] = useState ([...employeeArr]);
  
// Form/TrackerCard

//This is grabbing the input from the form to set the state of name
  const handleFullName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
//This is grabbing the input from the form to set the state of role
  const handleRole = (event) => {
    setRole(event.target.value);
    console.log(role);
  };

//This is handling the submit of the form to create a new object array and then 
//add it to the exsisting employees array
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value
    const role = event.target[1].value
    setEmployee(employees.concat([{
      name: name,
      role: role
    }]))
  };
//Below is the the rending of components and the props being passed down to children componenets.
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
