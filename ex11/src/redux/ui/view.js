import {useSelector} from 'react-redux'
const View=()=>{
 const bala=useSelector((state)=>state.balance)
    return (
        <div>
            <h1> Balance is RS {bala}</h1>
            <h1>{}</h1>
        </div>
    )
}
export default View;