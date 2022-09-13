import "./App.css";
import {Provider} from 'react-redux';
import {store} from './redux/store'
import View from "./redux/ui/view";
import Dispatcher from "./redux/ui/dispatcher";
function App() {
  return (
    
      <Provider store={store}>
        <div className="App">
        <View />
        <Dispatcher />
        </div>
      </Provider>
    
    
  );
}

export default App;
