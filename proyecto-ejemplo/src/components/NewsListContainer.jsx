import FavsToggle from "./FavsToggle";

function NewsListContainer({ greeting }) {
  return (
    <main>
      {greeting}
      <FavsToggle />
    </main>
  );
}

export default NewsListContainer;
