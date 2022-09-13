import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  Axios from 'axios'
import Random from './Randomuser';
import Hello from './google/Home';

function App() {
  return (
    <div className="App">
     <Random />
     <Hello />
    </div>
  );
}

export default App;
