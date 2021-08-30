import Modal from "../UI/Modal";
import Cartitem from "./Cartitem";
import classes from "./Cart.module.css";
import { CartContext } from "../context/cart-context";
import { useContext } from "react";
import {Fragment} from 'react'

const Cart = (props) => {
  const ctxCart = useContext(CartContext)
  const items = ctxCart.items
  const totalAmount = +ctxCart.totalAmount.toFixed(2)
  console.log(items)
  const content = items.map((meal) => {
    return (
      <Cartitem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        amount={meal.amount}
        item={meal}
      />
    );
  });
  return (
    <Modal modalHandler={props.modalHandler}>
      {totalAmount ? <Fragment>
      <ul className={classes.content}>
        {content}
      </ul>
      <div className={classes.main}>
          <div className={classes.totalAmount}>
          <h2>Total Amount</h2>
          <span>${totalAmount}</span>
          </div>
          <div className={classes.btn}>
              <button className={classes.close} onClick={props.modalHandler}>Close</button>
              <button className={classes.order}>Order</button>
          </div>
        </div>
        </Fragment> :
         <Fragment>
           <div className={classes.main}>
          <div className={classes.totalAmount}>
          <h2>Total Amount</h2>
          <span>$0.00</span>
          </div>
          <div className={classes.btn}>
              <button className={classes.close} onClick={props.modalHandler}>Close</button>
          </div>
        </div>
          </Fragment>}
    </Modal>
  );
};

export default Cart;
