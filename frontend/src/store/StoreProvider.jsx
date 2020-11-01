import React, { createContext, useState } from "react";

const VECHICLES_DATA = [
  { Bus: [420, 220, 220] },
  { Solo: [1200, 250, 250] },
  { Naczepa: [1360, 250, 275] },
];
export const StoreContext = createContext(VECHICLES_DATA);

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={VECHICLES_DATA}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
