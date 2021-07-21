import React, { useState } from 'react';
import './_percent-button.scss';

const tipPercentages = [5, 10, 15, 25, 50];

const Button = ({ percentage }) => {
  return (
    <>
      <button className="buttons">{percentage}%</button>
    </>
  );
};

const PercentButtons = () => {
  const [customPercent, setCustomPercent] = useState('');

  return (
    <>
      <span className="select-header">Select Tip %</span>
      <div className="percent-button-container">
        {tipPercentages.map((number) => (
          <Button percentage={number} key={number} />
        ))}
        <input
          type="number"
          value={customPercent}
          onChange={(e) => setCustomPercent(e.target.value)}
          placeholder="Custom"
        />
      </div>
    </>
  );
};

export default PercentButtons;
