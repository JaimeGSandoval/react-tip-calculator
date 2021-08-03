import React from 'react';
import './_reset-button.scss';

const ResetButton = ({ resetTipAmounts }) => {
  return (
    <>
      <button className="reset-button" onClick={resetTipAmounts}>
        reset
      </button>
    </>
  );
};

export default ResetButton;
