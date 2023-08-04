function Card({ titulo, children }) {
  return (
    <article>
      <h4>{titulo}</h4>
      {children}
    </article>
  );
}

export default Card;
