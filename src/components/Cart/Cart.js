import Modal from "../UI/Modal";
import Cartitem from "./Cartitem";
import classes from "./Cart.module.css";
import {Fragment,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Checkout from "./Checkout";


const Cart = (props) => {
  const [checkMeals,setCheckMeals] =useState(false)
 const items = useSelector(state=>state.items)
 const dispatch =useDispatch()
 const clearCart =()=>dispatch({type:'CLEAR'})
  const totalAmount = useSelector(state=>+state.totalAmount.toFixed(2))
  const [loading,setLoading] = useState(false)
  const [error,setError] =useState('')
  const [submited,setSubmited] = useState(false)
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
  console.log(props.items)
  const clickOrder =()=>{
    if(items.length>0){
      setCheckMeals(true)
    }
  }

  const onConfirm =(bodyData)=>{
      const postMeals = async()=>{
        setLoading(true)
          const response =await fetch('https://orders-7c0bd-default-rtdb.firebaseio.com/orders.json',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
               user:bodyData,
               orderedItems:items
              })
          })
          if(!response.ok){
              throw new Error('Something went wrong')
          }
          setLoading(false)
          setSubmited(true)
          clearCart()
      }
      postMeals().catch(error=>{
        setLoading(false)
        setError(error.message)
      })
  }

  let submitedContent =
  items.length  ? <Fragment>
  <ul className={classes.content}>
    {content}
  </ul>
  <div className={classes.main}>
      <div className={classes.totalAmount}>
      <h2>Total Amount</h2>
      <span>${totalAmount}</span>
      </div>
      {!checkMeals ? <div className={classes.btn}>
          <button className={classes.close} onClick={props.modalHandler}>Close</button>
          <button className={classes.order} type='button' onClick={clickOrder}>Order</button>
      </div>
      : <Checkout confirm = {onConfirm} close ={props.modalHandler}/>}
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
      </Fragment>


 if(loading){
   submitedContent= <p>Sending order data...</p>
 }

 if(submited){
   submitedContent =<Fragment>
     <p>Successfully sent the order!</p>
     <div className={classes.btn}>
       <button className={classes.order} onClick={props.modalHandler} type='button'>Close</button>
     </div>
   </Fragment>
 }
  
  return (
    <Modal modalHandler={props.modalHandler}>
    {submitedContent}
    </Modal>
  );
};




export default Cart;
