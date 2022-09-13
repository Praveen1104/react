import Child from "./child";
import { data } from "./data";
import { useState } from "react";
import "./App.css";
function Parent(){
    const [people,setpeople]=useState(data)
    return (
        <div>
            <div className="bg-info vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg" style={{width: '20'+ 'rem',height:'auto'}}>
        <div className="card-title m-2"><h3>{people.length} birthdays today</h3></div>
        <div className='class-body'>
        <Child ppl={people}/>
        <button className="btn btn-info form-control" onClick={()=>setpeople([])}>Clear </button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Parent;
