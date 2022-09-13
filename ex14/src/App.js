import  {BrowserRouter as Br,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
  return (
    <Br>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </Br>
  );
}

export default App;
