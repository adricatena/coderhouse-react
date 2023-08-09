import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Link } from "react-router-dom";

const categorias = ["Pantalones", "Remeras", "Buzos"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <nav>
        <span>
          Categorias
          {categorias.map((categoria) => (
            <Link key={categoria} to={`/categorias/${categoria}`}>
              <button>{categoria}</button>
            </Link>
          ))}
        </span>
        <Link to="/productos">
          <button>Productos</button>
        </Link>
      </nav>
    </main>
  );
}

export default App;
