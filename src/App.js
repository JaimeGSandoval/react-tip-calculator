import React, { useState } from 'react';
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
  const [customPercent, setCustomPercent] = useState('');
  const [tipPerPerson, setTipPerson] = useState('1.23');
  const [tipTotal, setTipTotal] = useState('4.56');

  const resetTipAmounts = () => {
    setBillTotal('');
    setNumberOfPeople('');
    setCustomPercent('');
    setTipPerson('0.00');
    setTipTotal('0.00');
  };

  // will get the percent amount from the button clicked
  // const getPercent = () => {};

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
