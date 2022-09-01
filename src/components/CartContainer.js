import React,{useEffect} from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux/es/exports";
import { CLEAR_CART,GET_TOTALS } from "../actions";
const CartContainer = ({ cart = [],total,dispatch }) => { //cart=[] ka mtlb hy k agr koi value ni arai to default empty array rakh do
  useEffect(()=>{
    dispatch({type:GET_TOTALS})
  },[cart,dispatch])  //dispatch just warning sy bachny k leye dala hy
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch({type:CLEAR_CART})}>clear cart</button>
      </footer>
    </section>
  );
};
const mapStateToProps=(store)=>{ //ye dispatch function ko bhi automatically dispatch prop mein assign kr dy ga
  const {cart,total}=store;
  return {cart,total}   //same as {cart:cart,total:total}
}

export default connect(mapStateToProps) (CartContainer);
