import {useContext,useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import { CartContext } from '../context/cart-context'

const HeaderButton =(props)=>{
    const ctxCart = useContext(CartContext)
    const [itemsChange,setitemsChange] = useState(false)
    const items = ctxCart.items

    useEffect(()=>{
        if(items.length === 0){
            return
        }
      setitemsChange(true)
      setTimeout(()=>{
        setitemsChange(false)
      },300)
    },[items])
   const count= items.reduce((total,item)=>{
     return total + item.amount
    },0)
    const buttonsClasses = `${classes.btn} ${itemsChange ? classes.bump: ''}`
    return(
           <button className={buttonsClasses} type='button' onClick={props.modalHandler} >
               <div className={classes.icon}>
               <span><CartIcon/></span>
               <span>Your Cart</span>
               </div>
               <span className={classes.price}>{count}</span>
               </button>
               
    )
}


export default HeaderButton