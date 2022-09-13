import Con from './context';
import { useContext } from 'react';
function Home(){
    const [phone,setphone]=useContext(Con)
    return (
        <div>
            <>
                <h1>Home Component </h1>
                <h2>{phone}</h2>
            </>
        </div>
    )
}
export default Home;