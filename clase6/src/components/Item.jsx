import { useEffect, useState } from "react";

function Item() {
  const [contador, setContador] = useState(0);
  const [contadorB, setContadorB] = useState(0);

  useEffect(() => {
    console.log("Esto se va a ejecutar solo cuando se monta el componente");

    // funcion de "limpieza"
    return () => {
      console.log("Esto se ejecuta cuando se desmonta el componente ITEM");
    };
  }, []);

  useEffect(() => {
    console.log(
      "Esto se va a ejecutar solo cuando se modifique el estado 'contador'"
    );
  }, [contador, contadorB]);

  return (
    <>
      Item
      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
      <button onClick={() => setContadorB(contadorB + 1)}>
        Contador B: {contadorB}
      </button>
    </>
  );
}

export default Item;
