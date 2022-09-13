import { useEffect, useRef } from "react"

function Refs(){
    const textelement=useRef()
    const bt=useRef()

    useEffect(()=>{
        textelement.current.innerText="super Fast";

       
    })

    function click(){
        bt.current.innerText="clicked";
        
    }
    return(
       <div>
       <h3 ref={textelement}>Loading...</h3>
       <button ref={bt} onClick={click}>click me</button>
       </div>
    )
}

export default Refs