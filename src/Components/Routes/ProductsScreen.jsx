import { Cards } from "../Cards"
import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import { CartContext } from "../../Context/CartContext"

export function ProductsScreen() {
  
    const {products} = useContext( ProductContext )

    const {productsList, buyProduct, addProduct, restProduct, deleteProduct} = useContext(CartContext) // para poder pasarselos a las Cards

    const handleBuy = (item) => {
      buyProduct(item)
    }
    const handleAdd = (id) => {
      
    }
    const handleRest = (id) => {
      
    }
    const handleDelete = (id) => {
      deleteProduct(id)
    }

  return (
   <>
   <h2>Products :</h2>
   <hr />

    {products.map(product => (
        <Cards // le pasamos las siguientes props al hijo com los valores que sacamos del fetch y seteamos en 'products'
        image={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        key={product.id}
        handleBuy = {() => handleBuy(product)}
        handleDelete = {() => handleDelete(product.id)}
        />
))}
   </>
  )
}
