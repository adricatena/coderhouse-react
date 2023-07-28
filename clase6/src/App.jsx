/* const productos = [
  {
    id: "1",
    name: "Pantalon",
    description: "Pantalon de algodon negro",
    stock: 10,
  },
  {
    id: "2",
    name: "Buzo",
    description: "Buzo deportivo azul",
    stock: 0,
  },
  {
    id: "3",
    name: "Campera",
    description: "Campera de jean",
    stock: 0,
  },
]; */

import { useEffect, useState } from "react";
import Item from "./components/Item";

function App() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const aux = [
        {
          id: "1",
          name: "Pantalon",
          description: "Pantalon de algodon negro",
          stock: 10,
        },
        {
          id: "2",
          name: "Buzo",
          description: "Buzo deportivo azul",
          stock: 0,
        },
        {
          id: "3",
          name: "Campera",
          description: "Campera de jean",
          stock: 0,
        },
      ];
      setProductos(aux);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <h4>Cargando...</h4>}
      {!isLoading &&
        productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
    </>
  );
}

export default App;
