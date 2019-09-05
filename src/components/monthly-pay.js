import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { requestLoanCalc } from '../store/epics/calculateLoan';
/**
 * Display the amount to pay monthly
 */
const MonthlyPay = ({ monthly, requestLoanCalc }) => {
  return (
    <div className="container">
      <p className="container">Monthly Pay</p>
      <h1 className="container">{`${Math.trunc(monthly)} Kč`}</h1>
      <Button className="row" type="submit" onClick={() => requestLoanCalc(10000, 24, 0.6)}>Continue</Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    monthly: state.summary.monthly,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLoanCalc: (amount, time, insurance) => {
      dispatch(requestLoanCalc(amount, time, insurance));
    },
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyPay);
