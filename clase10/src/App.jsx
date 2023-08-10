import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const vocales = ["a", "e", "i", "o", "u"];

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (evento) => console.log(evento);

  /* const handleChangeInput = (evento) => {
    console.log(evento);
  }; */

  /* const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(evento);
  }; */

  const handleChange = (evento) => {
    console.log("Evento onChange", evento);
  };

  const handleKeyDown = (evento) => {
    const { key } = evento;

    const esVocal = vocales.some((vocal) => key === vocal);
    /* let esVocal = false;
    switch (key) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        esVocal = true;
        break;
    } */
    if (esVocal) {
      evento.preventDefault();
    }

    console.log("Evento onKeyDown", evento);
    console.log({ esVocal });
  };

  return (
    <>
      <form>
        <label>
          Ingresa tu nombre:
          <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
      <button onClick={handleClick}>boton para ver eventos</button>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
