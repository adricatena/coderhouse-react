import Card from "react-bootstrap/Card";

function News({ title, author, createdAt }) {
  return (
    <Card style={{ width: 320 }}>
      <Card.Header>{createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>Creado por: {author}</Card.Footer>
    </Card>
  );
}

export default News;
