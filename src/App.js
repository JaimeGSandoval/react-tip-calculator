import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import NumberOfPeople from './components/number-of-people/NumberOfPeople';
import TipPerPerson from './components/tip-per-person/TipPerPerson';
import TipTotal from './components/tip-total/TipTotal';
import ResetButton from './components/reset-button/ResetButton';
import currencyFormatter from './utils/currency-formatter';
import './sass/main.scss';

function App() {
  const [billTotal, setBillTotal] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [percent, setPercent] = useState('');
  const [customPercent, setCustomPercent] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState('$0.00');
  const [tipTotal, setTipTotal] = useState('$0.00');

  const getPercent = (percentValue) => {
    if (!numberOfPeople) {
      return console.error('Value missing for the number of people field.');
    }
    setPercent(percentValue);
  };

  const calculateTotalPerPerson = (billValue, percentValue, numOfPeople) => {
    return (billValue * percentValue) / numOfPeople;
  };

  const calculateTip = useCallback(() => {
    if (numberOfPeople === '0') {
      console.error("Number of people can't be zero.");
      return setNumberOfPeople('');
    }

    if (billTotal === '0') {
      console.error("Bill total can't be zero.");
      return setBillTotal('');
    }

    const valueCheck = billTotal * percent;
    if (!valueCheck || billTotal <= 0) {
      return null;
    }
    const totalPerPerson = calculateTotalPerPerson(
      billTotal,
      percent,
      numberOfPeople
    );

    const grandTipTotal = billTotal * percent;

    setTipPerPerson(currencyFormatter.format(+totalPerPerson.toFixed(2) / 100));
    setTipTotal(currencyFormatter.format(+grandTipTotal.toFixed(2) / 100));
  }, [percent, billTotal, numberOfPeople]);

  useEffect(() => {
    if (percent === '0') {
      console.error("Custom percent can't be 0");
      return setCustomPercent('');
    }
    if (customPercent) {
      setPercent(customPercent);
      return calculateTip();
    }

    calculateTip();
  }, [customPercent, calculateTip, percent]);

  const resetTipAmounts = () => {
    setBillTotal('');
    setNumberOfPeople('');
    setPercent('');
    setCustomPercent('');
    setTipPerPerson('0.00');
    setTipTotal('0.00');
  };

  return (
    <>
      <Header />
      <div className="content-container">
        <main className="main-container">
          <BillInput
            billAmount={billTotal}
            setBill={(bill) => setBillTotal(bill)}
          />
          <PercentageButtons
            getPercent={getPercent}
            customPercent={customPercent}
            setCustomPercent={(percent) => setCustomPercent(percent)}
          />
          <NumberOfPeople
            numberOfPeople={numberOfPeople}
            setNumOfPeople={(number) => setNumberOfPeople(number)}
          />
        </main>
        <section className="total-container">
          <div className="inner-container">
            <TipPerPerson tipPerPerson={tipPerPerson} />
            <TipTotal tipTotal={tipTotal} />
            <ResetButton resetTipAmounts={resetTipAmounts} />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
