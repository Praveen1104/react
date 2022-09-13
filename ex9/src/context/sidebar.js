import {useContext} from 'react';
import Appcon from './home'
function Sidebar(){

    const [open,setopen]=useContext(Appcon);

    return (
        <div>
            
            <form>
                <input type="text" value={open}></input>
            </form>
            <h1>{open}</h1>
        </div>
    )

}
export default Sidebar;