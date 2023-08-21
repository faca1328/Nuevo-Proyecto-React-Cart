import { Cards } from "../Cards";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";
import "../../Styles/ProductScreenStyle.css";

export function ProductsScreen({ category }) {
  const { products } = useContext(ProductContext);
  const { productsList, buyProduct, addProduct, restProduct, deleteProduct } = useContext(CartContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Filtrar los productos cuando cambie la categoría seleccionada
    const filtered = category  === 'All'
      ? products
      : products.filter(product => product.category === category);
    setFilteredProducts(filtered);

    // Actualizar el estado de carga cuando los datos se carguen
    setLoading(false);

    console.log(category, products);
  }, [category, products]);

  const handleBuy = (item) => {
    buyProduct(item);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <>
      <h2>Products Category :  {category || 'All'} </h2>
      <hr />

      <div className="product-screen-container">
        {loading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          filteredProducts.map(product => (
            <Cards
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              key={product.id}
              handleBuy={() => handleBuy(product)}
              handleDelete={() => handleDelete(product.id)}
            />
          ))
        )}
      </div>
    </>
  );
}

