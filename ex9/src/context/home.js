import {createContext,useState} from 'react'


const Appcon=createContext();


const Pro=(children)=>{
    const [open,setopen]=useState(true)

    return (
        <Appcon.Provider value={[open,setopen]}>
        {children}
        </Appcon.Provider>
    )

}
export default Pro;