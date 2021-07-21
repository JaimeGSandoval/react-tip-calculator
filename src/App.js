import React from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import PersonInput from './components/person-total-input/PersonInput';
import TipPerPerson from './components/tip-per-person/TipPerPerson';
import TipTotal from './components/tip-total/TipTotal';
import ResetButton from './components/reset-button/ResetButton';
import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <main className="main-container">
          <BillInput />
          <PercentageButtons />
          <PersonInput />
        </main>
        <section className="total-container">
          <div className="inner-container">
            <TipPerPerson />
            <TipTotal />
            <ResetButton />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
