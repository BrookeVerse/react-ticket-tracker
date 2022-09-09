import React, { useState } from "react";
import Form from "../Form/Form";
import "./FormButton.scss";
const FormButton = ({handleRole, handleFullName, handleSubmit}) => {
  
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
