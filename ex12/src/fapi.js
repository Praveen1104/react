import {useEffect} from 'react';

function Fn(){
    useEffect(()=>{
        const re={
            method:"POST",
            header:{"Content-type":"application/json"},
            body:JSON.stringify({name:"praveen"}),
        }
        fetch("https://reqres.in/api/posts",re)
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    },[])
    return(
        <div>
            <h1>Data Retrieval Using Functional Component</h1>
        </div>
    )
}

export default Fn;