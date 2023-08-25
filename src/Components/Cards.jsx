import { useContext } from "react"
import '../Styles/Cards.css'
import { CartContext } from "../Context/CartContext";




export function Cards({ image, title, price, description, handleBuy, handleAdd, handleRest, handleDelete }) { //desestructuramos las props recibidas por el padre.


    const { productsList } = useContext(CartContext);

     // Comprobar si el producto ya está en el carrito
    const isProductInCart = productsList.some((item) => item.title === title);
    

 
    const add = () => {
        handleBuy()
        
    }

    const delet = () => {
        handleDelete()
    }

    return (
        <div className="tarjetas">
            <img src={image} alt={title} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-descripcion">{description}</p>  
            </div>

                <div>
                <p className="tarjeta-precio"> $ {price}</p>
                    {
                    isProductInCart 
                    ? 
                    <button className="boton-quitar" onClick={delet}> Delete </button>
                    :                  
                    <button className="boton-agregar" onClick={add}> Buy </button>
                    }
                </div>
        </div>
    )
}
