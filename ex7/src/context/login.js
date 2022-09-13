import Con from './context';
import {useState} from 'react';
 function Pro(props){
    const [phone,setphone]=useState("");

    return(
            <Con.Provider value={[phone,setphone]}>
            {props.children}
            </Con.Provider>
    
    )
 }
 export default Pro;