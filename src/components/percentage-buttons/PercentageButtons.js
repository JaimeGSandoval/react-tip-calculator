import React from 'react';
import './_percent-button.scss';

const Button = ({ percentage, getPercent, className }) => {
  return (
    <>
      <button
        onClick={(e) => getPercent(parseInt(e.target.innerText))}
        className={className}
      >
        {percentage}%
      </button>
    </>
  );
};

const PercentButtons = ({
  getPercent,
  customPercent,
  setCustomPercent,
  selectedPercent,
}) => {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <>
      <span className="select-header">Select Tip %</span>
      <div className="percent-button-container">
        {tipPercentages.map((percent) => {
          let activeClass = '';
          if (selectedPercent === percent) {
            activeClass = 'buttons selected-percent';
          } else {
            activeClass = 'buttons';
          }
          return (
            <Button
              getPercent={getPercent}
              percentage={percent}
              key={percent}
              className={activeClass}
            />
          );
        })}
        <input
          className="person-input"
          type="number"
          value={customPercent}
          onChange={(e) => setCustomPercent(e.target.value)}
          placeholder="Custom"
        />
      </div>
    </>
  );
};

export default React.memo(PercentButtons);
