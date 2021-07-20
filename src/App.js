import React from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import PersonInput from './components/person-total-input/PersonInput';
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
      </div>
    </>
  );
}

export default App;
