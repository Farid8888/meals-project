


const initialState ={
    items:[],
    totalAmount:0
}

export const reducerState =(state=initialState,action)=>{
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
    if(action.type === 'CLEAR'){
        return initialState
    }
    return state
}
