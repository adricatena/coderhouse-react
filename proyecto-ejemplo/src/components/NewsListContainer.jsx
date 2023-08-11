import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import Loader from "./Loader";

function NewsListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("No se encontraron noticias");
      })
      .then((result) => {
        console.log(result);
        setNews(result.hits);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main
      style={{
        padding: "1rem",
      }}
    >
      <NewsList newsList={news} />
    </main>
  );
}

export default NewsListContainer;
