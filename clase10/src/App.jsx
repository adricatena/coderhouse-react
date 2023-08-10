// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Item type="input" min={2} max={9} />
    </>
  );
}

export default App;
