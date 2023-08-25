import { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[cart] load items":
            // Cargar los datos del localStorage
            return action.payload;

        case '[cart] add item':
            return [...state, action.payload]    //Con esto los productos entran en la lista de compras

        case '[cart] sum item':
            return state.map(item => {
                const quantity = item.amount + 1
                if (item.id === action.payload) return { ...item, amount: quantity }
                return item
            })
        case '[cart] rest item':
            return state.map(item => {
                const quantity = item.amount - 1
                if (item.id === action.payload && item.amount > 1) return { ...item, amount: quantity }
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


    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    let addToLocalStorage = (item) => {

        if (Array.isArray(storedProducts)) {
            // Agrega el nuevo producto a la lista
            storedProducts.push(item);

            // Actualiza el localStorage con la lista actualizada de productos
            localStorage.setItem("products", JSON.stringify(storedProducts));
        } else {
            // Si los datos en el localStorage no son válidos, reinicializa el localStorage
            localStorage.setItem("products", JSON.stringify([item]));
        }

        console.log("Productos en el localStorage:", storedProducts);
    }

    useEffect(() => {
        // Obtener los datos del localStorage cuando se monta el componente
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

        // Dispatch una acción para cargar los datos en productsList
        dispatch({ type: "[cart] load items", payload: storedProducts });

        console.log(storedProducts);
        console.log(productsList);
    }, []);


    const buyProduct = (item) => {
        item.amount = 1
        const action = {
            type: '[cart] add item',
            payload: item
        }
        dispatch(action)
        addToLocalStorage(action.payload);
    }


    const addProduct = (id) => {
        const action = {
            type: '[cart] sum item',
            payload: id
        }
        dispatch(action)
        addToLocalStorage(action.payload)
    }
    const restProduct = (id) => {
        const action = {
            type: '[cart] rest item',
            payload: id
        }
        dispatch(action)
    }
    const deleteProduct = (id) => {

        // Filtra los productos en el carrito para eliminar los que tengan la misma ID
        const updatedCart = productsList.filter((product) => product.id !== id);

        const action = {
            type: '[cart] delete all',
            payload: id
        }
        dispatch(action)
        localStorage.setItem("products", JSON.stringify(updatedCart));
        console.log("Borraste algo:", storedProducts);
    }


    //Evita problemas cuando se usa el add/restProducts
    useEffect(() => {
        if (productsList.length > 0) {
          localStorage.setItem("products", JSON.stringify(productsList));
        }
      }, [productsList]);

    return (
        <CartContext.Provider value={{ productsList, buyProduct, addProduct, restProduct, deleteProduct }}>
            {children}
        </CartContext.Provider>
    )
}
