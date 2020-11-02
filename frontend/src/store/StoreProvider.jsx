import React, { createContext, useState } from "react";

const VECHICLES_DATA = [
  { bus: [420, 220, 220] },
  { solo: [1200, 250, 250] },
  { naczepa: [1360, 250, 275] },
];
export const StoreContext = createContext(null);

const StoreProvider = (props) => {
  const [vechicleData, setVechicleData] = useState(null);
  const [takeVechicle, setTakeVechicle] = useState(null);
  const [isVechicleSet, setIsVevhicleSet] = useState(false);

  const takeVechicleData = () => {
    setVechicleData(takeVechicle);
    setIsVevhicleSet(true);
  };

  return (
    <StoreContext.Provider
      value={{ vechicleData, takeVechicleData, setTakeVechicle, isVechicleSet }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
