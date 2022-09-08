import React, { useState } from "react";
import Form from "../Form/Form";
import "./FormButton.scss";
const FormButton = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employee, setEmployee] = useState ("");
  const handleFullName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const createEmployee = () => {
    const employee = {};
    employee.name = name;
    employee.role = role;
    setEmployee(employee)
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createEmployee();
    return employee
  };

  console.log(name);
  console.log(role);
  console.log(employee);
  
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="formButton">
      <div onClick={handleClick}> 
        <button className="formButton__button">New Employee</button>
      </div>
      <div>{showForm && <Form handleRole={handleRole} handleFullName={handleFullName} handleSubmit={handleSubmit}/>}</div>
    </div>
  );
};

export default FormButton;
