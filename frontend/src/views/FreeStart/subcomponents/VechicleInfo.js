import React, { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

const VechicleInfo = () => {
  const { vechicleData } = useContext(StoreContext);

  return (
    <div>
      <p>{vechicleData ? `Wybrany pojazd: ${vechicleData}` : null}</p>
    </div>
  );
};

export default VechicleInfo;
