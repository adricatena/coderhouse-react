import { useState } from "react";

function useFilterState(intialState) {
  const [filterState, setFilterState] = useState(intialState);

  const changeFilter = (event) => {
    setFilterState(event.target.value);
  };

  return { filterState, changeFilter };
}

export default useFilterState;
