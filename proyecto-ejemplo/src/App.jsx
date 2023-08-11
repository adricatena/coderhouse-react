// import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsDetailContainer from "./components/NewsDetailContainer";
import NewsListContainer from "./components/NewsListContainer";

// const categorias = ["Pantalones", "Remeras", "Buzos"];

function App() {
  return (
    <>
      <NavBar />
      {/* <NewsListContainer /> */}
      <NewsDetailContainer newsId={37080634} />
    </>
  );

  /* return (
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
  ); */
}

export default App;
