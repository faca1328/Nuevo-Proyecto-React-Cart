import { useState } from "react"
import '../Styles/Cards.css'



export function Cards({ image, title, price, description, handleBuy, handleAdd, handleRest, handleDelete }) { //desestructuramos las props recibidas por el padre.

    const [added, setAdded] = useState(false) // chequea si esta agregado el producto

    const add = () => {
        handleBuy()
        setAdded(true)
    }

    const delet = () => {
        handleDelete()
        setAdded(false)
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
                    {added ? <button className="boton-quitar" onClick={delet}> Delete </button>
                        : <button className="boton-agregar" onClick={add}> Buy </button>}
                </div>
        </div>
    )
}
