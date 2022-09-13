
import './App.css';
import Color from './color';
let co=["red","pink","yellow"];
let box=co.map((col)=>{
  return (<Color bgcolor={col}/>)
})

function App() {
  return (
    <div>
      {box}
    </div>  
  )
}

export default App;
