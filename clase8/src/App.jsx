import Card from "./components/Card";
import Carrito from "./components/Carrito";
import Formulario from "./components/Formulario";
import Item from "./components/Item";
import withLog from "./hoc/WithLog";

function App() {
  // const ItemWithLog = withLog(Item);

  return (
    <main>
      {/* <Card titulo="Buzo">
        <p>Esto es un buzo con capucha negro</p>
      </Card> */}
      {/* <Carrito /> */}
      <h2>MiTienda</h2>
      <Formulario />
      {/* <ItemWithLog titulo="Camiseta" descripcion="Camiseta de algodon blanca" /> */}
      {/* <Item titulo="Camiseta" descripcion="Camiseta de algodon blanca" /> */}
    </main>
  );
}

export default App;
