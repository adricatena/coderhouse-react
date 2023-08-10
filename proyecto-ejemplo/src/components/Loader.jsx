import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Spinner />
      <h4>Cargando...</h4>
    </div>
  );
}

export default Loader;
