import {useSelector} from 'react-redux'
function View(){
 const balance=useSelector((state)=>state.balance)
    return (
        <div>
            <h1>hello balance is {balance}</h1>
        </div>
    )
}
export default View;