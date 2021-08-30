import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
import {Fragment} from 'react'
import mealsimg from '../../assets/meals.jpg'


const Header =(props)=>{
    return(
        <Fragment>
       <header className={classes.mainHeader}>
           <h1>ReactMeals</h1>
          <HeaderButton modalHandler={props.modalHandler}/>
       </header>
       <div className={classes.mealsImg}>
           <img src={mealsimg} alt='A table full of delicious food!'/>
       </div>
       </Fragment>
    )
}

export default Header