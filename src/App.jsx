import "./App.scss";
import Heading from "./components/Heading/Heading";
import TrackerContainer from "./components/TrackerContainer/TrackerContainer";



function App() {
 
  return (
    <div className="app">
      <div className="heading">
        <Heading />
      </div>
      <div className="trackerContainer">
        <TrackerContainer />
      </div>
    </div>
  );
}

export default App;
