import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import heart from "../assets/heart.svg";
import heartFill from "../assets/heart-fill.svg";
import { FavsContext } from "../context/favsContext";

function FavsToggle() {
  const favsContext = useContext(FavsContext);
  console.log({ favsContext });
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    if (isFav) {
      favsContext.decrementFavsQuantity();
    } else {
      favsContext.incrementFavsQuantity();
    }
    setIsFav(!isFav);
  };

  return (
    <span>
      <Button onClick={handleClick}>
        {isFav ? "Eliminar de favoritos" : "Agregar a favoritos"}
      </Button>
      {isFav ? (
        <img alt="Favorito" src={heartFill} />
      ) : (
        <img alt="No es favorito" src={heart} />
      )}
    </span>
  );
}

export default FavsToggle;
