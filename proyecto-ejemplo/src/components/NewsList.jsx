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
          <News
            key={notice.objectID}
            title={notice.title}
            author={notice.author}
            createdAt={createdAt.toISOString()}
          />
        );
      })}
    </section>
  );
}

export default NewsList;
