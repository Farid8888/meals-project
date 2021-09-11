import classes from './Cartitem.module.css'
import {useDispatch} from 'react-redux'


const Cartitem =(props)=>{
    const dispatch =useDispatch()
    const addItems=(price)=>dispatch({type:'PLUS_ITEM',item:price})
    const removeItems=(price)=>dispatch({type:'REMOVE_ITEMS',item:price})
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
            <button type='button' onClick={()=>addItems(props.item)}>+</button>
        </div>
        </div>
    </li>
 )
}




export default Cartitem

