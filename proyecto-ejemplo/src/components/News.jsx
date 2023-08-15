import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ThemeContext } from "../App";

function News({ title, author, createdAt }) {
  const contexto = useContext(ThemeContext);

  console.log({ contexto });

  return (
    <Card style={{ width: 320, backgroundColor: contexto ? "blue" : "red" }}>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>Creado por: {author}</Card.Footer>
    </Card>
  );
}

export default News;
