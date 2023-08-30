import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favs from "./components/Favs";
import NavBar from "./components/NavBar";
import NewsDetailContainer from "./components/NewsDetailContainer";
import NewsListContainer from "./components/NewsListContainer";
import FavsProvider from "./context/favsContext";

function App() {
  return (
    <FavsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <NewsListContainer />
              </>
            }
          />
          <Route
            path="/category/:id"
            element={
              <>
                <NavBar />
                <NewsListContainer />
              </>
            }
          />
          <Route
            path="/news/:id"
            element={
              <>
                <NavBar />
                <NewsDetailContainer />
              </>
            }
          />
          <Route
            path="/favs"
            element={
              <>
                <NavBar />
                <Favs />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </FavsProvider>
  );
}

export default App;
