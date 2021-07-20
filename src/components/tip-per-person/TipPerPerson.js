import React from 'react';
import './_tip-per-person.scss';

const TipPerPerson = () => {
  return (
    <div className="tip-per-container">
      <div className="text-box">
        <span>Tip Amount</span>
        <span>/ person</span>
      </div>

      <div className="tip-amount">$4.27</div>
    </div>
  );
};

export default TipPerPerson;
