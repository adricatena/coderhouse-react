import { useState } from "react";

function useContador(valorInicial) {
  const [cantidad, setCantidad] = useState(valorInicial);

  const incrementar = () => {
    setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return { cantidad, incrementar, decrementar };
}

export default useContador;
