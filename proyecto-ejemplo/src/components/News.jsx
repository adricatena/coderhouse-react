import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ThemeContext } from "../App";

function News({ title, author, createdAt }) {
  const themeContext = useContext(ThemeContext);

  // console.log({ themeContext });

  return (
    <Card
      style={{ width: 320, backgroundColor: themeContext ? "blue" : "red" }}
    >
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>Creado por: {author}</Card.Footer>
    </Card>
  );
}

export default News;
