import {createContext,useContext,useState} from 'react';

const contex=createContext(null)

function Userinfo(){
    const use=useContext(contex);

    return(
        <div>
        <h2>Got Details from {use}</h2>
        </div>
    )
}

function Pro(){
    const [user,setuser]=useState(null)
    

    return(
        <contex.Provider value={user}>
        <button onClick={()=>setuser("praveen")}>click button</button>
        <Userinfo />
        </contex.Provider>
    )
}

export default Pro