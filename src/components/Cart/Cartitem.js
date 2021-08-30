import classes from './Cartitem.module.css'
import {connect} from 'react-redux'


const Cartitem =(props)=>{
    
  
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
            <button type='button' onClick={props.removeItems.bind(null,props.item)} >–</button>
            <button type='button' onClick={()=>props.addItems(props.item)}>+</button>
        </div>
        </div>
    </li>
 )
}

const mapDispatchToProps=(dispatch)=>{
return{
    addItems:(price)=>dispatch({type:'PLUS_ITEM',item:price}),
    removeItems:(price)=>dispatch({type:'REMOVE_ITEMS',item:price})
}
}


export default connect(null,mapDispatchToProps)(Cartitem)

