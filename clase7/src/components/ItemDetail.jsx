function ItemDetail({ descripcion, precio }) {
  return (
    <artcile>
      <h5>Producto</h5>
      <p>Descripcion: {descripcion}</p>
      <h6>Precio: ${precio}</h6>
    </artcile>
  );
}

export default ItemDetail;
