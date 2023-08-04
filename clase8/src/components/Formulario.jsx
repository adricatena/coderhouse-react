import { useState } from "react";
import Input from "./Input";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  const handleChangeNombre = (event) => {
    event.preventDefault();
    setNombre(event.target.value);
  };
  const handleChangeApellido = (event) => {
    event.preventDefault();
    setApellido(event.target.value);
  };
  const handleChangeEdad = (event) => {
    event.preventDefault();
    setEdad(event.target.value);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input label="Nombre" value={nombre} handleChange={handleChangeNombre} />
      <Input
        label="Apellido"
        value={apellido}
        handleChange={handleChangeApellido}
      />
      <Input label="Edad" value={edad} handleChange={handleChangeEdad} />
    </form>
  );
}

export default Formulario;
