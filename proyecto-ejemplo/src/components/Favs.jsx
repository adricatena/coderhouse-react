import { Link } from "react-router-dom";
import { useFavsContext } from "../context/favsContext";
import NewsDetail from "./NewsDetail";

function Favs() {
  const { favsList } = useFavsContext();
  console.log(favsList);

  if (favsList.length === 0) {
    return (
      <div>
        <h3>Aun no agregaste nada a favoritos</h3>
        <Link to="/">Volver a Home</Link>
      </div>
    );
  }

  return (
    <div>
      {favsList.map((fav) => (
        <NewsDetail
          key={fav.id}
          createdAt={fav.createdAt}
          title={fav.title}
          author={fav.author}
          id={fav.id}
        />
      ))}
    </div>
  );
}

export default Favs;
