import React from 'react';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goForward = () => {
    history.goForward();
  };

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </div>
  );
}

export default Navigation;