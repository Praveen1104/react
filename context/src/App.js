import "./App.css";
import Provide from "./provider";
import AgentBond from './consumer'
import Agent from "./consumer";

function App() {
  return (
    <div className="App">
      <Provide>
      <AgentBond />
      </Provide>
    </div>
  );
}

export default App;
