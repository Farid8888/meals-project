import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
import {Fragment,useState} from 'react'
import mealsimg from '../../assets/meals.jpg'
import Cart from '../../components/Cart/Cart'

const Header =(props)=>{
    const [modal,setModal]=useState(false)

    const modalHandler=()=>{
        setModal(prevst=>{
          return !prevst
        })
      }
    return(
        <Fragment>
       <header className={classes.mainHeader}>
           <h1>ReactMeals</h1>
           {modal && <Cart modalHandler={modalHandler}/>}
          <HeaderButton modalHandler={modalHandler}/>
       </header>
       <div className={classes.mealsImg}>
           <img src={mealsimg} alt='A table full of delicious food!'/>
       </div>
       </Fragment>
    )
}

export default Header