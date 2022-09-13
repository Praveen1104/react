import {Moviecontext} from './Mycontext'
import {useState,useContext} from 'react'

function Addmovie(){

    const [Movie,setMovie]= useContext(Moviecontext);
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [time,settime]=useState("")
    const namechange=(e)=>{
        setname(e.target.value)
    
    }
   const  pricechange=(e)=>{
       setprice(e.target.value)
   }
   const timechange=(e)=>{
    settime(e.target.value)
   }
   const totalchange=(e)=>{
    e.preventDefault();
    setMovie((pre)=>[...pre,{name:name},{price:price},{time:time}])
   }
    return (
        <div>
        <form onSubmit={totalchange}>
        <input type="text" name="" id=""  onChange={namechange}/>
        <input type="text" name="" id="" onChange={pricechange} />
        <input type="text" name="" id=""  onChange={timechange}/>
        <button>Submit</button>
        </form>
        </div>
    )

}
export default Addmovie