import { ProductContext } from "./ProductContext";
import { useState , useEffect } from "react";

export function ProductProvider({children}) {

       // Fetch para traer los productos
       const [products, setProducts] = useState([])

       // llamamos a los productos de forma async => se ejecuta en el UseEffect , cuando se ejecuta el useEffect
       const fetchProducts = async() => {
           const response = await fetch('https://fakestoreapi.com/products')
           const data = await response.json()
           setProducts(data)
       }
   
       useEffect(() => {
         fetchProducts()
    
       }, [])

  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}
