import { createContext, useContext, useState } from "react";

export const FavsContext = createContext([]);

function FavsProvider({ children }) {
  const [favsQuantity, setFavsQuantity] = useState(0);
  const [order, setOrder] = useState({});

  const incrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity + 1);
  };

  const decrementFavsQuantity = () => {
    setFavsQuantity(favsQuantity - 1);
  };

  const purchaseCart = (cartInfo) => {
    const auxOrder = {
      buyer: {
        email: "",
        name: "",
        phone: "",
      },
      items: [
        {
          id: 1,
          price: 100,
          title: "",
        },
      ],
      total: 100,
    };
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
