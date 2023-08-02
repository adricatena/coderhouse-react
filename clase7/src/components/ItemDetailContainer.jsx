import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setItem({
          descripcion: data.results[1].name,
          precio: data.results[1].id,
        });
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : (
        <main>
          <ItemDetail descripcion={item.descripcion} precio={item.precio} />
        </main>
      )}
    </>
  );
}

export default ItemDetailContainer;
