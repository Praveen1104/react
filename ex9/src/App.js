import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pro from './context/home';
import Sidebar from './context/sidebar';

function App() {
  return (
    <div className="App">
    <Pro>
      <Sidebar />
    </Pro>
      
    </div>
  );
}

export default App;
