import classes from './Checkout.module.css'
import {useRef,useState,useEffect} from 'react'


const Checkout =(props)=>{
const nameRef = useRef()
const streetRef =useRef()
const postalRef =useRef()
const cityRef = useRef()


const [name,setName] =useState(false)
const [street,setStreet] =useState(false)
const [postal,setPostal] = useState(false)
const [city,setCity] =useState(false)
const [touchedName,setTouchedName] = useState(false)
const [touchedPostal,setTouchedPostal] = useState(false)
const [touchedStreet,setTouchedStreet] = useState(false)
const [touchedCity,setTouchedCity] = useState(false)
const [error,setError] = useState('')
const [nameInput,setNameInput] =useState('')
const [streetInput,setStreetInput] =useState('')
const [postalInput,setPostalInput] =useState('')
const [cityInput,setCityInput] =useState('')

    const onSubmitHandler=(event)=>{
      event.preventDefault()
      setTouchedName(true)
      setTouchedPostal(true)
      setTouchedStreet(true)
      setTouchedCity(true)
     if(nameRef.current.value.trim().length > 0){
         setName(true)
     }else{
         setName(false)
     }
     if(streetRef.current.value.trim().length>0){
         setStreet(true)
     }else{
        setStreet(false)
    }
     if(postalRef.current.value.trim().length===5){
         setPostal(true)
     }else{
        setPostal(false)
    }
     if(cityRef.current.value.trim().length >0){
         setCity(true)
     }else{
        setCity(false)
    }
    if(!name && !street && !postal && !city){
        return
    }
      setNameInput(nameRef.current.value)
      setStreetInput()
    }
const formIsValid = name && street && postal && city

    useEffect(()=>{
        console.log(nameRef.current)
        if(formIsValid){
            props.confirm({
                name:nameRef.current.value,
                street:streetRef.current.value,
                postal:postalRef.current.value,
                city:cityRef.current.value
            })
        }else{
            return
        }
        
    },[formIsValid,nameInput,streetInput,postalInput,cityInput])
    
    let classesName =classes.inputForm
    classesName = !name && touchedName ? `${classes.inputForm} ${classes.invalid}` : classes.inputForm
    const classesStreet = !street && touchedStreet ? `${classes.inputForm} ${classes.invalid}` : classes.inputForm
    const classesPostal = !postal && touchedPostal ? `${classes.inputForm} ${classes.invalid}` : classes.inputForm
    const classesCity = !city && touchedCity ? `${classes.inputForm} ${classes.invalid}` : classes.inputForm
    
    
    return(
     <form className={classes.form} onSubmit={onSubmitHandler}>
         <div className={classesName}>
             <label htmlFor='name'>Your Name</label>
             <input id='name' type='text' ref={nameRef} />
             {!name && touchedName && <p className={classes.content}>Please enter a valid name!</p>}
         </div>
         <div className={classesStreet}>
             <label htmlFor='street'>Street</label>
             <input id='street' type='text' ref={streetRef} />
             {!street && touchedStreet && <p className={classes.content}>Please enter a valid street!</p>}
         </div>
         <div className={classesPostal}>
             <label htmlFor='postal'>Postal Code</label>
             <input id='postal' type='text' ref={postalRef} />
             {!postal && touchedPostal && <p className={classes.content}>Please enter a valid postal code (five characters long)!</p>}
         </div>
         <div className={classesCity}>
             <label htmlFor='city'>City</label>
             <input id='city' type='text' ref={cityRef}/>
             {!city && touchedCity && <p className={classes.content}>Please enter a valid name!</p>}
         </div>
         <div className={classes.btn}>
             <button className={classes.cancel} type='button' onClick={props.close}>Cancel</button>
             <button className={classes.confirm} type='submit'>Confirm</button>
         </div>
     </form>
    )
}

export default Checkout