import classes from './Cartitem.module.css'
import { CartContext } from '../context/cart-context'
import {useContext,useState} from 'react'

const Cartitem =(props)=>{
    const ctxCart = useContext(CartContext)
    const additems = ctxCart.addPlusItems
    const removeItems = ctxCart.removeItems
  
 return(
    <li className={classes.cartitem}>
        <div className={classes.main}>
        <div className={classes.spanflex}>
        <div className={classes.names}>
            <h3>{props.name}</h3>
            <span className={classes.price}>${props.price}</span>
        </div>
        <span className={classes.amount}>x {props.amount}</span>
        </div>
        <div className={classes.btn}>
            <button type='button' onClick={removeItems.bind(null,props.item)} >–</button>
            <button type='button' onClick={()=>additems(props.item)}>+</button>
        </div>
        </div>
    </li>
 )
}

export default Cartitem

