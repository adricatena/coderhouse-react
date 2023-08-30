import Button from "react-bootstrap/Button";
import heartFill from "../assets/heart-fill.svg";
import heart from "../assets/heart.svg";

function FavsToggle({ handleClick, isFav }) {
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
