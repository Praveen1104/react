import { FaSearch } from "react-icons/fa";
import {useState} from 'react';

import axios from 'axios';

function Hello(){

    const [qurey,setqurey]=useState("")
    const [seb,setseb]=useState("")
    function handle(){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q={qurey}`)
        .then((res)=>console.log(res))
        .then((re)=>setseb(re))
    }
    return (
        <div className='bg-dark text-white vh-100 p-2 d-flex justify-content-center'>
        <div>
        <h1>Google Books</h1>
        <div className='input-group'>
            <input type="text" className="form-control" value={qurey} onChange={(e)=>{setqurey(e.target.value)}}  />
            <button className="btn btn-primary" onClick={handle}><FaSearch /></button>
        </div>
        </div>
        </div>
    )
}
 export default Hello;