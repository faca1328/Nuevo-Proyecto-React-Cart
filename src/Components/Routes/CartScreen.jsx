import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import '../../Styles/CartScreenStyle.scss'

export function CartScreen() {

  const { productsList, addProduct, restProduct, deleteProduct } = useContext(CartContext)

  const totalSum = () => {
    return productsList.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)
  }

  const handlePrint = () => {

    productsList.forEach((item) => {
      deleteProduct(item.id);
    });

    print()
  }

  return (
    <div className="cart-body">
      <table className="table">
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

            <tr key={item.id}>
              <th >{item.title}</th>
              <td>{item.price}</td>
              <td className="td-box">
                <button className='rest-btn' onClick={() => restProduct(item.id)}>-</button>
                <div>
                  {item.amount}
                </div>
                <button className='plus-btn' onClick={() => addProduct(item.id)}>+</button>
              </td>
              <td className="td-delete">
                <button className='delete-btn' onClick={() => deleteProduct(item.id)}> Delete </button>
              </td>
            </tr>

          ))}

          <th>Total: </th>
          <td>${totalSum()}</td>
        </tbody>
      </table>

      <div><button className='cart-btn' onClick={handlePrint} disabled={productsList.length < 1}>Buy</button></div>
    </div>
  )
}
