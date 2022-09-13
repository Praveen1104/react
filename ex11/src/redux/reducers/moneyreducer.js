const initial={
  money:0,
}
export const MoneyReducer = (state =initial, action) => { 
  switch(action.type) {
    case "WITHDRAW":
      return  state + action.money;
    case "DEPOSIT":
      return   state - action.money;
    default:
      return state.money;
  }
};



/* 
switch(action.type) {
    case "WITHDRAW":
      return ( {state:state.money + action.money });
    case "DEPOSIT":
      return   20;
    default:
      return state.money;
  }

  if(action.type === "WITHDRAW"){
    return state.money + action.money;
     
   }
   else if(action.type === "DEPOSIT"){
    return state.money + action.money;
     
   }
   else{
    return state
   }
*/