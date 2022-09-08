import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  
  const handleFullName = (event) => {
    setName(event.target.value);
  }
  const handleRole = (event) => {
    setRole(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, role);
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
