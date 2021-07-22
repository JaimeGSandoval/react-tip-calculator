import React from 'react';
import './_reset-button.scss';

const ResetButton = ({ resetTipAmounts }) => {
  return (
    <>
      <button onClick={resetTipAmounts}>reset</button>
    </>
  );
};

export default ResetButton;
