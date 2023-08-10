function BtnCounts({ onConfirm }) {
  const handleClick = () => {
    onConfirm();
  };

  return <button onClick={handleClick}>sumar al carrito</button>;
}

export default BtnCounts;
