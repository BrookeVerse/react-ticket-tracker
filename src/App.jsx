import "./App.scss";
import Heading from "./components/Heading/Heading";
import TrackerContainer from "./components/TrackerContainer/TrackerContainer";
import FormButton from "./components/FormButton/FormButton";
function App() {

  return (
    <div className="app">
      <div className="heading">
        <Heading />
      </div>
      <div>
        <FormButton  />
      </div>
      <div className="trackerContainer">
        <TrackerContainer />
      </div>
    </div>
  );
}

export default App;
