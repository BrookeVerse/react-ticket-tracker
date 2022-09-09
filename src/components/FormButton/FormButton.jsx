import React, { useState } from "react";
import Form from "../Form/Form";
import "./FormButton.scss";
const FormButton = ({handleRole, handleFullName, handleSubmit}) => {
  
  //this is changing the state of the form 
  const [showForm, setShowForm] = useState(false);

  //this is what it switching between it being visible and not visible
  const handleClick = () => {
    setShowForm(!showForm);
  };

  //this is where the form is being called and also using the props from the App parent
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
