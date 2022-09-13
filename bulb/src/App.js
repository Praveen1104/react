import { useState } from 'react';
import './App.css';
import Bulb from './bulb';

function App() {
function togglebutton(){
  if(st==="on"){
    stf("off");
  }
  else{
    stf("on");
  }
}
function update(event){
   setcv(event.target.value);
}
  let [st,stf]=useState("on");
  let [cv,setcv]=useState("");
  return(
    <div>
      <Bulb state={st}/>
      <button onClick={togglebutton}>click me</button>
      <p>{st}</p>   
      <input placeholder='enter name' onKeyUp={update}></input> 
      <h2>Hi Welcome {cv}</h2>
    </div>
  ) ;
}

export default App;
