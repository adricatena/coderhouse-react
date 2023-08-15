import { useState } from "react";
import Button from "react-bootstrap/Button";
import heart from "../assets/heart.svg";
import heartFill from "../assets/heart-fill.svg";
import { useFavsContext } from "../context/favsContext";

function FavsToggle() {
  const { decrementFavsQuantity, incrementFavsQuantity } = useFavsContext();
  // console.log({ favsContext });
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    if (isFav) {
      decrementFavsQuantity();
    } else {
      incrementFavsQuantity();
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
