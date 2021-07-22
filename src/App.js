import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import PersonInput from './components/person-total-input/PersonInput';
import TipPerPerson from './components/tip-per-person/TipPerPerson';
import TipTotal from './components/tip-total/TipTotal';
import ResetButton from './components/reset-button/ResetButton';
import './sass/main.scss';

function App() {
  const [billTotal, setBillTotal] = useState('');
  const [tipPerPerson, setTipPerson] = useState('5.55');
  const [tipTotal, setTipTotal] = useState('5.55');

  // useEffect(() => {
  //   // console.log((billTotal / 4) * 0.25);
  // }, [billTotal]);

  const resetTipAmounts = () => {
    setBillTotal('');
    setTipPerson('');
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
          <PercentageButtons />
          <PersonInput />
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
