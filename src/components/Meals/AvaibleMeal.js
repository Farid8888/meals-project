import MealItem from './Mealitem/Mealitem'
import Card from '../UI/Card'
import classes from './Avaible.module.css'
import {useEffect,useState} from 'react'


const AvaibleMeal =()=>{
  const [meals,setMeals] = useState([])
  const [error,setError] = useState('')
  const [loading,setLoading]=useState(false)

   useEffect(()=>{
   const fetchMeals = async()=>{
     setLoading(true)
     const response = await fetch('https://orders-7c0bd-default-rtdb.firebaseio.com/meals.json')
     if(!response.ok){
       throw new Error('Something went wrong')
     }
     const data = await response.json()
     let mealsData = []
     for(let key in data){
       mealsData.push({
         name:data[key].name,
         id:data[key].id,
         description:data[key].description,
         price:data[key].price
       })
     }
     setMeals(mealsData)
     setLoading(false)
   }
    fetchMeals().catch(error=>{
   setError(error.message)
   setLoading(false)
    })
   },[])

   if(loading){
     return <div className={classes.loading}>...Loading</div>
   }

   if(error){
     return <div className={classes.error}>{error}</div>
   }

    const content = meals.map(meal=>{
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