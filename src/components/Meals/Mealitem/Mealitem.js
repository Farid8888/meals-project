import classes from './Mealitem.module.css'
import MealForm from './MealForm'


const Mealitem=(props)=>{
    return(
     <li className={classes.itemsli}>
         <div className={classes.items}>
         <h3>{props.name}</h3>
         <div className={classes.description}>{props.description}</div>
         <div className={classes.price}>${props.price}</div>
         </div>
         <div>
         <MealForm id={props.id} name={props.name} price={props.price}/>
         </div>
     </li>
    )
}

export default Mealitem