import classes from './Meal.module.css'
import MealsSummary from './MealSummary'
import AvailableMeal from './AvaibleMeal'
import { Fragment } from 'react'


const Meal =(props)=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeal/>
        </Fragment>
    )
}

export default Meal