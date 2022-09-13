import './App.css';
import Controls from './redux/UI/controls';
import View from './redux/UI/view';
import {Provider}  from 'react-redux';
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div >
     <View />
     <Controls />
      
    </div>
    </Provider>
  );
}

export default App;
