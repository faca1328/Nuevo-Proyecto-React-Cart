import { useContext, useEffect, useState } from "react";
import { Cards } from "../../Cards";
import { ProductContext } from "../../../Context/ProductContext";
import '../../../Styles/HomeCardsStyle.css'
import { CartContext } from "../../../Context/CartContext";



export function HomeCards() {
  const { products } = useContext(ProductContext);
  const [topProductFilter, setTopProductFilter] = useState([]);
  

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.id === 2 || product.id === 4 || product.id === 5 || product.id === 8
    );
    setTopProductFilter(filteredProducts);
  }, [products]);
   


  const { buyProduct, deleteProduct} = useContext(CartContext) // para poder pasarselos a las Cards

  const handleBuy = (item) => {
    buyProduct(item)
  }
    
  const handleDelete = (id) => {
    deleteProduct(id)
  }



  return (
    <div className="element">
      <div>
        <h5 className="home-cards-title"> Most Selling Products : </h5>
      </div>

      {topProductFilter.length === 4 ? (
        <div className="home-cards-container">
          {topProductFilter.map((product) => (
            <Cards 
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              key={product.id}
              handleBuy = {() => handleBuy(product)}
              handleDelete = {() => handleDelete(product.id)}
            />
          ))}
        </div>
      ) : (
        <h1> Error </h1>
      )}
    </div>
  );
}