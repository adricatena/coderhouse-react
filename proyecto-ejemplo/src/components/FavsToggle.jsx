import { useState } from "react";
import Button from "react-bootstrap/Button";
import heart from "../assets/heart.svg";
import heartFill from "../assets/heart-fill.svg";

function FavsToggle() {
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
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
