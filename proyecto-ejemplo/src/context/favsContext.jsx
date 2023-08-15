import { createContext, useContext, useState } from "react";

export const FavsContext = createContext([]);

function FavsProvider({ children }) {
  const [favsQuantity, setFavsQuantity] = useState(0);

  const incrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity + 1);
  };

  const decrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity - 1);
  };

  return (
    <FavsContext.Provider
      value={{
        favsQuantity: favsQuantity,
        incrementFavsQuantity: incrementFavsQuantity,
        decrementFavsQuantity,
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
