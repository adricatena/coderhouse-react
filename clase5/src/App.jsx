const Texto = (props) => {
  console.log({ props });
  return <p></p>;
};

function App() {
  return (
    <>
      <Texto parrafo="Hola coderss!" />
    </>
  );
}

export default App;
