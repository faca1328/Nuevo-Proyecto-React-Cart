import { useReducer } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (state = initialState, action = {}) => { 
    switch (action.type) {
        case '[cart] add item':
            return [...state, action.payload]    //Con esto los productos entran en la lista de compras

        case '[cart] sum item':
            return state.map(item => {
                const quantity = item.amount + 1
                if(item.id === action.payload) return {...item, amount: quantity}
                return item
            })
        case '[cart] rest item':
            return state.map(item => {
                const quantity = item.amount - 1
                if(item.id === action.payload && item.amount > 1)  return {...item, amount: quantity}
                return item
            })
        case '[cart] delete all':
            return state.filter(compra => compra.id !== action.payload)


        default:
            return state;
    }

}

const initialState = []

export function CartProvider({ children }) {

    const [productsList, dispatch] = useReducer(cartReducer, initialState)

    const buyProduct = (item) => {
        item.amount = 1
        const action = {
            type: '[cart] add item',
            payload: item
        }
        dispatch(action)
    }
    const addProduct = (id) => {
        const action = {
            type: '[cart] sum item',
            payload: id
        }
        dispatch(action)
    }
    const restProduct = (id) => {
        const action = {
            type: '[cart] rest item',
            payload: id
        }
        dispatch(action)
    }
    const deleteProduct = (id) => {
        const action = {
            type: '[cart] delete all',
            payload: id
        }
        dispatch(action)
    }



    return (
        <CartContext.Provider value = {{productsList, buyProduct, addProduct, restProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}
