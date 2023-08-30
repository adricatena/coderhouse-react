export const reducer = (state, action) => {
  if (action.type === "SET_NOMBRE") {
    return { ...state, nombre: action.newNombre };
  }
  if (action.type === "SET_APELLIDO") {
    return { ...state, apellido: action.newNombre };
  }
  if (action.type === "SET_EDAD") {
    return { ...state, edad: action.newNombre };
  }
  if (action.type === "SET_NACIONALIDAD") {
    return { ...state, nacionalidad: action.newNombre };
  }
};
