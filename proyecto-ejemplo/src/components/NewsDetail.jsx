import Card from "react-bootstrap/Card";
import FavsToggle from "./FavsToggle";
import { useContext } from "react";
import { FavsContext } from "../context/favsContext";

function NewsDetail({ createdAt, title, author }) {
  const favsContext = useContext(FavsContext);
  // console.log({ favsContext });

  return (
    <Card style={{ width: 320 }}>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <FavsToggle />
      </Card.Body>
      <Card.Footer>Creado por: {author}</Card.Footer>
    </Card>
  );
}

export default NewsDetail;
