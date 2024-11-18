import React from 'react'
import { Provider } from 'react-redux'
import 'react-rangeslider/lib/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import store from './store'
// import Borrow from './components/borrow';
// import TimeMonths from './components/time-months';
// import Insurance from './components/insurance';
// import SummaryLoan from './components/summary-loan';
import MonthlyPay from './components/monthly-pay'

const App = () => (
  <Provider store={store}>
    <div className='App container'>
      <div className='row'>
        <div className='col-sm-8'>
          <h2>Loan Calculator</h2>
          {/* <Borrow />
          <TimeMonths />
          <Insurance />
          <SummaryLoan /> */}
        </div>
        <div className='col-sm-4 vertical-center'>
          <MonthlyPay />
        </div>
      </div>
    </div>
  </Provider>
)

export default App
