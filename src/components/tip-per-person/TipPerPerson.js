import React from 'react';
import './_tip-per-person.scss';

const TipPerPerson = ({ tipPerPerson }) => {
  return (
    <div className="tip-per-container">
      <div className="text-box">
        <span className="span-1">Tip Amount</span>
        <span className="span-2">/ person</span>
      </div>

      <div className="tip-amount">{tipPerPerson}</div>
    </div>
  );
};

export default TipPerPerson;
