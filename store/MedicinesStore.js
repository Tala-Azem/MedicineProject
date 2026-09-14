import { createContext, useState } from "react";

export const MedicinesContext = createContext({
  medicines: [],
  setMedicines: () => {},
});

export function MedicinesContextProvider({ children }) {
  const [medicinesState, setMedicinesState] = useState([]);

  function setMedicines(medicines) {
    setMedicinesState(medicines);
  }

  const value = {
    medicines: medicinesState,
    setMedicines: setMedicines,
  };

  return (
    <MedicinesContext.Provider value={value}>
      {children}
    </MedicinesContext.Provider>
  );
}
