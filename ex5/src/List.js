import { Moviecontext } from "./Mycontext";
import {useContext} from 'react';

function List() {
  const [Movie,setMovie] = useContext(Moviecontext);
  return (

    <div>
      {
        Movie.map((item,id)=>{
        console.log(item)
        return (
            <div key={id}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <h4>{item.time}</h4>
            </div>
        )
            
        })
      }
    </div>

  );
}
export default List
