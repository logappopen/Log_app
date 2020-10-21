import React from "react";
import { useHistory } from "react-router-dom";

const RegistrationPage = () => {
  const history = useHistory();
  const handleOnClick = () => history.goBack();
  return (
    <div>
      <h1>Rejestracja</h1>
      <button onClick={handleOnClick}>Powrót do poprzedniej strony</button>
    </div>
  );
};

export default RegistrationPage;
