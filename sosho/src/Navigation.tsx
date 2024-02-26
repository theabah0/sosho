import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Equivalent to history.goBack()
  };

  const goForward = () => {
    navigate(1); // Equivalent to history.goForward()
  };

  return (
    <div className="navigation">
      <button className="navigation-button" onClick={goBack}>
        Back
      </button>
      {/* 
        <button className="navigation-button" onClick={goForward}>
        Forward
      </button> */}
    </div>
  );
};

export default Navigation;
