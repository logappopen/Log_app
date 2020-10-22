import React from "react";
import { useHistory } from "react-router-dom";

const ReturnButton = () => {
  const history = useHistory();
  const handleOnClick = () => history.goBack();
  return (
    <button className="returnButton" onClick={handleOnClick}>
      wstecz
    </button>
  );
};

export default ReturnButton;
