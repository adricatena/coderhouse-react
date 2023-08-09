import { useEffect } from "react";

function Cart() {
  useEffect(() => {
    document.title = "Cart!";
  }, []);
  return <div>Carrito de compra</div>;
}

export default Cart;
