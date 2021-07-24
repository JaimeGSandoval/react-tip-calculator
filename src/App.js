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
  const [percent, setPercent] = useState(0);
  const [customPercent, setCustomPercent] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState('$0.00');
  const [tipTotal, setTipTotal] = useState('$0.00');

  const getPercent = (percentValue) => {
    setPercent(percentValue);
  };

  const calculateBillTipPercent = (billValue, percentValue) => {
    return billValue * percentValue;
  };

  const calculateTotalPerPerson = (billValue, percentValue, numOfPeople) => {
    return (billValue * percentValue) / numOfPeople;
  };

  // useEffect(() => {
  //   calculateBillTipPercent(billTotal, percent);
  // }, [billTotal, percent]);

  const calculateTip = useCallback(() => {
    if (billTotal === '0') {
      alert("Can't be zero");
      setBillTotal('');
    }

    const valueCheck = calculateBillTipPercent(billTotal, percent);

    if (!valueCheck || billTotal < 1) {
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
    if (customPercent) {
      setPercent(+customPercent);
      return calculateTip();
    }

    calculateTip();
  }, [customPercent, calculateTip]);

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
