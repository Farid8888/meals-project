import classes from './Input.module.css'
import React from 'react'


const Input =React.forwardRef((props,ref)=>{
    return(
     <div className={classes.input}>
         <label htmlFor={props.id}>{props.children}</label>
         <input id={props.id} {...props.input} type={props.type} onChange={props.change}  ref={ref}/>
     </div>
    )
})

export default Input