import { useEffect } from "react";

function Item() {
  useEffect(() => {
    document.title = "Item!";
  }, []);

  return <div>Item</div>;
}

export default Item;
