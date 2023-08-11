import { useEffect, useState } from "react";
import Loader from "./Loader";
import NewsDetail from "./NewsDetail";

function NewsDetailContainer({ newsId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [notice, setNotice] = useState({});

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/items/${newsId}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("No se encontro una noticia con ese ID");
      })
      .then((result) => {
        console.log(result);
        const createdAt = new Date(result.created_at);
        setNotice({ ...result, createdAt: createdAt.toISOString() });
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <NewsDetail
        title={notice.title}
        author={notice.author}
        createdAt={notice.createdAt}
      />
    </main>
  );
}

export default NewsDetailContainer;
