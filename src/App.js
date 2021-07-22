import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import NumberOfPeople from './components/number-of-people/NumberOfPeople';
import TipPerPerson from './components/tip-per-person/TipPerPerson';
import TipTotal from './components/tip-total/TipTotal';
import ResetButton from './components/reset-button/ResetButton';
import './sass/main.scss';

function App() {
  const [billTotal, setBillTotal] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [percent, setPercent] = useState(0);
  const [customPercent, setCustomPercent] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState('0.00');
  const [tipTotal, setTipTotal] = useState('0.00');

  const getPercent = (percentValue) => {
    setPercent(percentValue);
  };

  useEffect(() => {
    const calculateTip = () => {
      const valueCheck = billTotal * percent;
      if (!valueCheck) {
        return null;
      } else {
        const totalPerPerson = (billTotal * percent) / numberOfPeople;
        const grandTipTotal = billTotal * percent;

        setTipPerPerson(totalPerPerson);
        setTipTotal(grandTipTotal);
      }
    };

    calculateTip();
  }, [percent, billTotal, numberOfPeople, tipPerPerson, tipTotal]);

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
