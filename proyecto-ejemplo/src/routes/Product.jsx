import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  console.log({ params });

  if (isLoading)
    return (
      <div>
        <h3>Cargando...</h3>
      </div>
    );

  return <div>Prodcuto</div>;
}

export default Product;
