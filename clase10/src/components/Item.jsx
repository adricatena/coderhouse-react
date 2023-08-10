import { useState } from "react";
import BtnCounts from "./BtnCounts";
import InputCounts from "./Inputcounts";

function Item({ type, min, max }) {
  const [cantidad, setCantidad] = useState(min);

  const Count = type === "button" ? BtnCounts : InputCounts;

  const addToCart = (nuevaCantidad) => {
    if (nuevaCantidad) {
      if (nuevaCantidad >= min && nuevaCantidad <= max) {
        setCantidad(nuevaCantidad);
      }
    } else {
      if (cantidad < max) {
        setCantidad(cantidad + 1);
      }
    }
  };

  return (
    <div>
      <p>Aca va la descripcion del item</p>
      <p>La cantidad es: {cantidad}</p>
      <Count onConfirm={addToCart} />
    </div>
  );
}

export default Item;
