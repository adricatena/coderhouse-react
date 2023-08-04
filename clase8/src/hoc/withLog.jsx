function withLog(Component) {
  const WithLog = (props) => {
    console.log("Este es un HOC con logs en consola");
    console.log({ props });
    const titulo = props.titulo.toUpperCase();
    return <Component titulo={titulo} descripcion={props.descripcion} />;
  };

  return WithLog;
}

export default withLog;
