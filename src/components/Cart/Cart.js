import Modal from "../UI/Modal";
import Cartitem from "./Cartitem";
import classes from "./Cart.module.css";
import {Fragment} from 'react'
import {connect} from 'react-redux'



const Cart = (props) => {
 
  const totalAmount = +props.totalAmount.toFixed(2)
  
  const content = props.items.map((meal) => {
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
  console.log(props.items)
  return (
    <Modal modalHandler={props.modalHandler}>
      {props.items.length  ? <Fragment>
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

const mapStateToProps=(state)=>{
return{
  items:state.items,
  totalAmount:state.totalAmount
}
}


export default connect(mapStateToProps)(Cart);
