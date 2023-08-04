import useContador from "../hooks/useContador";

function Item({ titulo, descripcion }) {
  const { cantidad, incrementar, decrementar } = useContador(0);

  return (
    <article>
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
      <span>
        <button onClick={incrementar}>+</button>
        {cantidad}
        <button onClick={decrementar}>-</button>
      </span>
    </article>
  );
}

export default Item;
