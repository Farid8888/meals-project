import {useEffect,useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import {connect} from 'react-redux'

const HeaderButton =(props)=>{
    
    const [itemsChange,setitemsChange] = useState(false)
    
   const {items} =props
    useEffect(()=>{
        if(items.length === 0){
            return
        }
      setitemsChange(true)
      setTimeout(()=>{
        setitemsChange(false)
      },300)
    },[items])
   const count= props.items.reduce((total,item)=>{
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

const mapStateToProps=(state)=>{
  return{
   items:state.items
  }

}


export default connect(mapStateToProps)(HeaderButton)