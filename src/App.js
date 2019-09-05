import React, { Component } from 'react';
import './App.css';
import store from './store';
import Borrow from './components/borrow';
import TimeMonths from './components/time-months';
import Insurance from './components/insurance';
import SummaryLoan from './components/summary-loan';
import MonthlyPay from './components/monthly-pay';
import { Provider } from 'react-redux';
import 'react-rangeslider/lib/index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap/dist/'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <div className="row">
            <div className="col-sm-8">
              <h2>Loan Calculator</h2>
              <Borrow />
              <TimeMonths />
              <Insurance />
              <SummaryLoan />
            </div>
            <div className="col-sm-4 vertical-center">
              <MonthlyPay />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
//
//

        // <form
        //   onSubmit={e => {
        //     e.preventDefault()
        //     // if (!input.value.trim()) {
        //     //   return
        //     // }
        //     // dispatch(addTodo(input.value))
        //     // input.value = ''
        //   }}
        // >
        // </form>
// <input
// ref={node => {
//   // input = node
// }}
// />

        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <p>
        //     Edit <code>src/App.js</code> and save to reload.
        //   </p>
        //   <a
        //     className="App-link"
        //     href="https://reactjs.org"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     Learn React
        //   </a>
        // </header>

export default App;
