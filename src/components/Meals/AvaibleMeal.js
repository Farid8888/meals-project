import MealItem from './Mealitem/Mealitem'
import Card from '../UI/Card'
import classes from './Avaible.module.css'

const AvaibleMeal =()=>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

    const content = DUMMY_MEALS.map(meal=>{
        return <MealItem key={meal.id} id={meal.id}
                         name={meal.name} description={meal.description}
                         price={meal.price}/>
    })      
    return(
      <section className={classes.content}>
          <Card>
        <ul>
            {content}
        </ul>
        </Card>
      </section>
    )
}

export default AvaibleMeal