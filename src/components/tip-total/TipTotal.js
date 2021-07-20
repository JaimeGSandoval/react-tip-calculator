import React from 'react';
import './_tip-total.scss';

const TipTotal = () => {
  return (
    <div className="tip-per-container">
      <div className="text-box">
        <span>Tip Amount</span>
        <span>/ person</span>
      </div>

      <div className="tip-amount">$32.79</div>
    </div>
  );
};

export default TipTotal;
