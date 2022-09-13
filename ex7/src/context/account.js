import  Con from './context';
import { useContext} from 'react';

function Account(){
    const [phone,setphone]=useContext(Con);
    function change(e){
        setphone(e.target.value)
        e.preventDefault();
    }
    return(
        <div>
            <input value={phone} onChange={(e)=>change(e)} type="text" name="" id="" />
            <li>{phone}</li>
        </div>
    )
}
export default Account