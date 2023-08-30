import { useReducer } from "react";
import "./App.css";
import { reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    nombre: "",
    apellido: "",
    edad: "",
    nacionalidad: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ state });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            value={state.nombre}
            onChange={(e) =>
              dispatch({ type: "SET_NOMBRE", newNombre: e.target.value })
            }
          />
        </label>
        <label>
          Apellido
          <input
            value={state.apellido}
            onChange={(e) =>
              dispatch({ type: "SET_APELLIDO", newNombre: e.target.value })
            }
          />
        </label>
        <label>
          Edad
          <input
            value={state.edad}
            onChange={(e) =>
              dispatch({ type: "SET_EDAD", newNombre: e.target.value })
            }
          />
        </label>
        <label>
          Nacionalidad
          <input
            value={state.nacionalidad}
            onChange={(e) =>
              dispatch({ type: "SET_NACIONALIDAD", newNombre: e.target.value })
            }
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
