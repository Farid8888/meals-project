import {createContext,useState,useReducer} from 'react'


export const CartContext =createContext({
    items:[],
    totalAmount: 0,
    addItems:(items)=>{},
    removeItems:(id)=>{},
    addPlusItems:(items)=>{}
})

const defaultState ={
    items:[],
    totalAmount:0
}

const reducerState =(state,action)=>{
    if(action.type === 'ADD_ITEM'){
        const totalPrice = state.totalAmount + action.item.amount * action.item.price
        const existingCartItemIndex=state.items.findIndex(item=>{
            return item.id === action.item.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        if(existingCartItem){
            const newArray = [...state.items]
            const newItem = {...existingCartItem,amount:existingCartItem.amount + action.item.amount}
            newArray[existingCartItemIndex]=newItem
            updatedItems=newArray
        }else{
            updatedItems=state.items.concat(action.item)
        }
        return{
            items:updatedItems,
            totalAmount:totalPrice
        }
    }
    if(action.type === 'PLUS_ITEM'){
        const totalPrice = state.totalAmount + action.item.price
        const existingCartItemIndex=state.items.findIndex(item=>{
            return item.id === action.item.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        if(existingCartItem){
            const newArray = [...state.items]
            const newItem = {...existingCartItem,amount:existingCartItem.amount + 1}
            newArray[existingCartItemIndex]=newItem
            updatedItems=newArray
        }else{
            updatedItems=state.items.concat(action.item)
        }
        return{
            items:updatedItems,
            totalAmount:totalPrice
        }
    }
    if(action.type === 'REMOVE_ITEMS'){
        const totalPrice = state.totalAmount - action.item.price
        const existingCartItemIndex=state.items.findIndex(item=>{
            return item.id === action.item.id
        })
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        if(existingCartItem.amount=== 1){
            updatedItems = state.items.filter(item=>item.id !==action.item.id)
        }else{
            const newArray = [...state.items]
            const newItem = {...existingCartItem,amount:existingCartItem.amount - 1}
            newArray[existingCartItemIndex]=newItem
            updatedItems=newArray
        }
        return{
            items:updatedItems,
            totalAmount:totalPrice
        }
    }
}



const CartProvider =(props)=>{
    const [reciveItems,setrecieveItems] = useState([])
    const[cartState,dispatch]=useReducer(reducerState,defaultState)
    const addItems =(items)=>{
       dispatch({type:'ADD_ITEM',item:items})
    }

    const plusItems =(items)=>{
        dispatch({type:'PLUS_ITEM',item:items})
    }
    const removeItems =(items)=>{
      dispatch({type:'REMOVE_ITEMS',item:items})
    }
    return(
        <CartContext.Provider value={{items:cartState.items,addItems:addItems,removeItems:removeItems,totalAmount:cartState.totalAmount,addPlusItems:plusItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider