import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export function CartScreen() {

const {productsList, buyProduct, addProduct, restProduct, deleteProduct} = useContext(CartContext)

  const totalSum = () => {
    return productsList.reduce((total,item) => total + item.price*item.amount, 0).toFixed(2)
  }

  const handlePrint = () => {
    print()
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(item => (

          <tr key= {item.id}>
            <th >{item.title}</th>
            <td>{item.price}</td>
            <td>
              <button onClick={() => restProduct(item.id)}>-</button>
              {item.amount}
              <button onClick={() => addProduct(item.id)}>+</button>
            </td>
            <button onClick={()=>deleteProduct(item.id)}> Delete </button>
          </tr>

          ))}

            <th>Total: </th>
            <td>${totalSum()}</td>
        </tbody>
      </table>

      <div><button onClick={handlePrint} disabled={productsList.length<1}>Buy</button></div>
    </>
  )
}
