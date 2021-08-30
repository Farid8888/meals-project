import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import Card from './Card'
import React from 'react'




const BackDrop =(props)=>{
    return(
        <div className={classes.backDrop} onClick={props.modalHandler}>
            <OverLay/>
            </div>
    )
} 
const OverLay =(props)=>{
    return(
        <div className={classes.overlay}><Card>{props.children}</Card></div>
    )
} 


const Modal =(props)=>{
    return(
        <React.Fragment>
       {ReactDOM.createPortal(<BackDrop modalHandler={props.modalHandler}/>,document.getElementById('modal'))}
       {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,document.getElementById('modal'))}
       </React.Fragment>
    )
}

export default Modal