import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsDetailContainer from "./components/NewsDetailContainer";
import NewsListContainer from "./components/NewsListContainer";
import { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import FavsProvider, { FavsContext } from "./context/favsContext";

export const ThemeContext = createContext();

// console.log({ ThemeContext });

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // <FavsContext.Provider value={[]}>
    <FavsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Button onClick={() => setIsDarkMode(!isDarkMode)}>
                  Dark/light mode
                </Button>
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
        </Routes>
      </BrowserRouter>
    </FavsProvider>
    // </FavsContext.Provider>
  );
}

export default App;
