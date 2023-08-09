import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts([...json]);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <Link key={product.id} to={`/productos/${product.id}`}>
          <article>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default Products;
