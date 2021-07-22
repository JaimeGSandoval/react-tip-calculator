import React from 'react';
import './_reset-button.scss';

const ResetButton = ({ reset }) => {
  return (
    <>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default ResetButton;
