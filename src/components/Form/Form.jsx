import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  //const [newEmployee, setNewEmployee] = useState("");
  
  const handleFullName = (event) => {
    setName(event.target.value);
  }
  const handleRole = (event) => {
    setRole(event.target.value)
  }
  const createEmployee = () => {
    const employee = {}
    employee.name = name;
    employee.role = role;
    console.log(employee);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    return createEmployee();
  }
  return (
    <div className="formsContainer">
      <form onSubmit={handleSubmit}>
        <input onChange={handleFullName}  placeholder="Employee Name" name="name" />
        <input onChange={handleRole}  placeholder="Role" name="role" />
        <button>Add</button>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Form;
