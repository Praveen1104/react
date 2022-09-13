import {useDispatch} from 'react-redux'
import { Withdraw,Deposit } from '../action'

function Dispatcher (){
  const Dispatch=useDispatch()
function Add(){
    Dispatch(Withdraw)
}
function Debit(){
    Dispatch(Deposit)
}
  return (
    <div>
        <button onClick={Add()}>Add Amount</button>
        <button onClick={Debit()}>Withdraw Amount</button>
    </div>
  )
}

export default Dispatcher;