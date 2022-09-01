import { DECREASE,INCREASE,CLEAR_CART,REMOVE,GET_TOTALS } from "./actions";

function reducer(state,action){ 
  if(action.type===CLEAR_CART){
    return {...state,cart:[]}
  }
  if(action.type===INCREASE){
    let tempCart=state.cart.map((cartItem)=>{
      if(cartItem.id===action.payload.id){
        cartItem={...cartItem,amount:cartItem.amount+1}
      }
      return cartItem
    })
    return {...state,cart:tempCart}
  }
  if(action.type===DECREASE){
    let tempCart=state.cart.map((cartItem)=>{
        if(cartItem.id===action.payload.id){
          cartItem={...cartItem,amount:cartItem.amount-1}
        }
        return cartItem
      })
      return {...state,cart:tempCart}

    
  }
  if(action.type===REMOVE){
    return {...state,cart:state.cart.filter(cartItem=>cartItem.id!==action.payload.id)}
  }
  if(action.type===GET_TOTALS){
    let {total,amount}=state.cart.reduce((cartTotal,cartItem)=>{  //let is leye use kea kun k total ki value ko nechy override karna hy
    const {price,amount}=cartItem;
    const itemTotal=price*amount;
    cartTotal.total+=itemTotal
    cartTotal.amount+=amount;
      return cartTotal;
    },
  {
    total:0,
    amount:0,
  });
  total=parseFloat(total.toFixed(2));   //parseFloat string ko convert karny k leye use kea
  console.log(total)
  return {...state,total,amount}
  }
    return state; //agr koi action aya hy aur wo hum check ni kr rahy to old state by default chali jayegi  //common pratice is setting up a saprate file for this
  }
  export default reducer