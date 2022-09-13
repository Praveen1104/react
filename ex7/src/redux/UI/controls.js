// invoke the action
import { useDispatch } from "react-redux";
// invoke this action
import {increment,decrement} from "../action"


const Controls = () => {
    const dispatch = useDispatch(); 

    const incrementCount = () => {
        // invoking increemnet onClick 
        dispatch(increment());
    }
    const decrementCount=()=>{
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick ={incrementCount} >
            Add Count
        </button>
        <button onClick ={decrementCount} >
            Reduce Count
        </button>
        </div>
        
    )
}

export default Controls;
