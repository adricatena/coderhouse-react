import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useFavsContext } from "../context/favsContext";
import FavsToggle from "./FavsToggle";

function NewsDetail({ createdAt, title, author }) {
  const { decrementFavsQuantity, incrementFavsQuantity } = useFavsContext();
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    if (isFav) {
      decrementFavsQuantity();
    } else {
      incrementFavsQuantity();
    }
    setIsFav(!isFav);
  };

  return (
    <Card style={{ width: 320 }}>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <FavsToggle isFav={isFav} handleClick={handleClick} />
      </Card.Body>
      <Card.Footer>Creado por: {author}</Card.Footer>
    </Card>
  );
}

export default NewsDetail;
