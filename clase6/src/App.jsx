// import './App.css'

import { useState } from "react";
import Item from "./components/Item";

function App() {
  const [showItem, setShowItem] = useState(true);

  return (
    <>
      App
      {showItem ? <Item /> : "No va a mostrar Item"}
      <button onClick={() => setShowItem(!showItem)}>
        Montar/Desmontar Item
      </button>
    </>
  );
}

export default App;
