
import "./Form.scss";

const Form = ({ handleFullName, handleRole, handleSubmit }) => {
  //This is a template for how the form looks and functions using props from the App parent
  return (
    <div className="formsContainer">
      <form onSubmit={handleSubmit}>
        <div className="formsContainer__inputContainer">
          <input onChange={handleFullName} placeholder="Employee Name" name="name" className="formsContainer__input"/>
          <input onChange={handleRole} placeholder="Role" name="role" className="formsContainer__input"/>
        </div>
        <button className="formsContainer__button">Add</button>
      </form>
      <div></div>
    </div>
  );
};

export default Form;
