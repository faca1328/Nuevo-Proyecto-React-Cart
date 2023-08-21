import { ProductContext } from "./ProductContext";
import { useState, useEffect } from "react";

export function ProductProvider({ children }) {
  // Fetch para traer los productos
  const [products, setProducts] = useState([]);

  // llamamos a los productos de forma async => se ejecuta en el UseEffect , cuando se ejecuta el useEffect
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

