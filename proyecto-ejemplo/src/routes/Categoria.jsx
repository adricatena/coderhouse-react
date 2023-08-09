import { useParams } from "react-router-dom";

function Categoria() {
  const params = useParams();
  console.log({ params });

  return <div>Categoria</div>;
}

export default Categoria;
