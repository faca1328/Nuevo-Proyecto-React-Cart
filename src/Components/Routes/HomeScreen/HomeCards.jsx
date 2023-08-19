import { useContext, useEffect, useState } from "react";
import { Cards } from "../../Cards";
import { ProductContext } from "../../../Context/ProductContext";


export function HomeCards() {
  const { products } = useContext(ProductContext);
  const [topProductFilter, setTopProductFilter] = useState([]);
  

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.id === 2 || product.id === 4 || product.id === 5 || product.id === 8
    );
    setTopProductFilter(filteredProducts);
  }, [products]);


  return (
    <>
      <div>
        <h5> Most Selling Products : </h5>
      </div>

      {topProductFilter.length === 4 ? (
        <div>
          {topProductFilter.map((product) => (
            <Cards
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <h1> Error </h1>
      )}
    </>
  );
}