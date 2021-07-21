import React from 'react';
import './_tip-total.scss';

const TipTotal = () => {
  return (
    <div className="tip-per-container">
      <div className="text-box">
        <span className="span-1">Total</span>
        <span className="span-2">/ person</span>
      </div>

      <div className="tip-total">$32.79</div>
    </div>
  );
};

export default TipTotal;
