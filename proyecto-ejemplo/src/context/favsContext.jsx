import { createContext, useContext, useState } from "react";

export const FavsContext = createContext([]);

function FavsProvider({ children }) {
  const [favsQuantity, setFavsQuantity] = useState(0);
  const [favsList, setFavsList] = useState([]);

  const incrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity + 1);
  };

  const decrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity - 1);
  };

  const addFavToList = (fav) => {
    setFavsList([...favsList, fav]);
  };

  const removeFatFormList = (favId) => {
    const newFavs = favsList.filter((fav) => fav.id !== favId);
    setFavsList(newFavs);
  };

  return (
    <FavsContext.Provider
      value={{
        favsQuantity: favsQuantity,
        incrementFavsQuantity: incrementFavsQuantity,
        decrementFavsQuantity,
        addFavToList,
        removeFatFormList,
        favsList,
      }}
    >
      {children}
    </FavsContext.Provider>
  );
}

export function useFavsContext() {
  return useContext(FavsContext);
}

export default FavsProvider;
