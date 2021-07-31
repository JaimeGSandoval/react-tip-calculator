import React from 'react';
import './_percent-button.scss';
import {
  preventMinus,
  preventPasteNegative,
} from '../../utils/utility-functions';

const Button = ({ percentage, getPercent, buttonStyles }) => {
  return (
    <>
      <button
        onClick={(e) => getPercent(parseInt(e.target.innerText))}
        className={buttonStyles}
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
          return (
            <Button
              getPercent={getPercent}
              percentage={percent}
              key={percent}
              buttonStyles={
                selectedPercent === percent
                  ? 'buttons selected-percent'
                  : 'buttons'
              }
            />
          );
        })}
        <input
          className="person-input"
          type="number"
          value={customPercent}
          onChange={(e) => setCustomPercent(e.target.value)}
          placeholder="Custom"
          onKeyPress={preventMinus}
          onPaste={preventPasteNegative}
        />
      </div>
    </>
  );
};

export default React.memo(PercentButtons);
