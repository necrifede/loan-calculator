import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

/**
 * Display the amount to pay monthly
 */
const MonthlyPay = ({ monthly }) => {
  return (
    <div className="row">
      <p className="row">Monthly Pay</p>
      <h1 className="row">{`${monthly} Kč`}</h1>
      <Button  className="row" type="submit">Continue</Button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    monthly: 1358
  }
}

export default connect(mapStateToProps)(MonthlyPay)