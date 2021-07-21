import React, { useState } from 'react';
import './_percent-button.scss';

const Button = ({ percentage }) => {
  return (
    <>
      <button className="buttons">{percentage}%</button>
    </>
  );
};

const PercentButtons = () => {
  const tipPercentages = [5, 10, 15, 25, 50];
  const [customPercent, setCustomPercent] = useState('');

  return (
    <>
      <span className="select-header">Select Tip %</span>
      <div className="percent-button-container">
        {tipPercentages.map((percent) => (
          <Button percentage={percent} key={percent} />
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
