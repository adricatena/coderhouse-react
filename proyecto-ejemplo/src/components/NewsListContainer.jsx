import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsList from "./NewsList";

function NewsListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchUrl = `https://hn.algolia.com/api/v1/search_by_date?tags=story${
      params?.id ? `&query=${params.id}` : ""
    }`;
    console.log(fetchUrl);

    fetch(fetchUrl)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("No se encontraron noticias");
      })
      .then((result) => {
        console.log(result);
        setNews(result.hits);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 2000);
      });
  }, []);

  /* const Render = isLoading ? (
    <Loader />
  ) : (
    <main
      style={{
        padding: "1rem",
      }}
    >
      <NewsList newsList={news} />
    </main>
  );

  return Render; */

  /* return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main
          style={{
            padding: "1rem",
          }}
        >
          <NewsList newsList={news} />
        </main>
      )}
    </>
  ); */

  /* return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <main
          style={{
            padding: "1rem",
          }}
        >
          <NewsList newsList={news} />
        </main>
      )}
    </>
  ); */

  // if (isLoading) return <Loader />;

  return (
    <main
      className={`show ${isLoading ? "hide" : ""}`}
      /* style={
        isLoading
          ? { display: "none" }
          : {
              padding: "1rem",
            }
      } */
    >
      <NewsList newsList={news} />
    </main>
  );
}

export default NewsListContainer;
