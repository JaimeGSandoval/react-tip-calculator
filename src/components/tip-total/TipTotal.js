import React from 'react';
import './_tip-total.scss';

const TipTotal = ({ tipTotal }) => {
  return (
    <div className="tip-per-container">
      <div className="text-box">
        <span className="span-1">Total</span>
        <span className="span-2">/ person</span>
      </div>

      <div className="tip-total">${tipTotal}</div>
    </div>
  );
};

export default TipTotal;
