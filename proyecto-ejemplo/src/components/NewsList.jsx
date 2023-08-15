import { Link } from "react-router-dom";
import News from "./News";

function NewsList({ newsList = [] }) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {newsList.map((notice) => {
        const createdAt = new Date(notice.created_at);
        return (
          <Link key={notice.objectID} to={`/news/${notice.objectID}`}>
            <News
              title={notice.title}
              author={notice.author}
              createdAt={createdAt.toISOString()}
            />
          </Link>
        );
      })}
    </section>
  );
}

export default NewsList;
