function Item({ producto }) {
  return (
    <article key={producto.id}>
      <h3>{producto.name}</h3>
      <h6>{producto.description}</h6>
      {producto.stock > 0 ? (
        <button>Agregar al carrito!</button>
      ) : (
        <span>No tenemos mas productos de este tipo</span>
      )}
    </article>
  );
}

export default Item;
