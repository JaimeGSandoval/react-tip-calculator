import React from 'react';
import Header from './components/header/Header';
import BillInput from './components/bill-total-input/BillInput';
import PercentageButtons from './components/percentage-buttons/PercentageButtons';
import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <main className="main-container">
          <BillInput />
          <PercentageButtons />
        </main>
      </div>
    </>
  );
}

export default App;
