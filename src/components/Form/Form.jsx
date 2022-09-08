
import "./Form.scss";

const Form = ({ handleFullName, handleRole, handleSubmit }) => {
  return (
    <div className="formsContainer">
      <form onSubmit={handleSubmit}>
        <input onChange={handleFullName} placeholder="Employee Name" name="name" />
        <input onChange={handleRole} placeholder="Role" name="role" />
        <button>Add</button>
      </form>
      <div></div>
    </div>
  );
};

export default Form;
