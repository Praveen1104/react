import Addmovie from './Add';
import './App.css';
import List from './List';
import MovieProvider from './Moviecontext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
      <Addmovie />
      <List />
      </MovieProvider>
    </div>
  );
}

export default App;
