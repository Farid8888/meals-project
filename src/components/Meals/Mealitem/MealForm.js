import Input from '../../UI/Input'
import classes from './MealForm.module.css'
import {useState,useContext,useEffect,useRef} from 'react'
import { CartContext } from '../../context/cart-context';


const MealForm = (props) => {
  const ctxCart = useContext(CartContext)
  const addItems = ctxCart.addItems
  
  const [otherAmount,setotherAmount] = useState('1')
  const [amountVal,setamountVal] = useState(false)
  const amountRef =useRef()
  const changeAmount =()=>{    
      setotherAmount(amountRef.current.value)
  }

  const enteredNumber = +otherAmount
  const enteredAmount = otherAmount

const addCartSubmit =(event)=>{
  event.preventDefault()
  if(enteredAmount.trim().length === 0 ||
  enteredNumber<1||enteredNumber>5){
    setamountVal(true)
    return
  }
    const objCart = {
      name:props.name,
      price:props.price,
      amount:+otherAmount,
      id:props.id
    }
    addItems(objCart)
    console.log(objCart)
}




  return (
  <form className={classes.form} onSubmit={addCartSubmit}>
      <Input type="number" input={{min:'1',max:'10',defaultValue:'1',step:'1',type:'number'}} id={props.id} change={changeAmount} ref={amountRef}>
        Amount
      </Input>
      <button className={classes.btn} type='submit'>+ Add</button>
      {amountVal && <div>Please enter a valid amount</div>}
  </form>
  )
};

export default MealForm;
