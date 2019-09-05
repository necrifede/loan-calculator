import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// RPSN = APR (annual or annualized percentage rate)

/**
 *
 * @param {number} interest - Interest taken into account for the payment, expresed in percentage
 * @param {number} apr - from czech 'RPSN', it means APR (annual or annualized percentage rate)
 * @param {number} insurance - Percentage taken into account for the calculation
 * @param {number} total - Total amount payed after complete all payments
 */
const SummaryLoan = ({ interest, apr, insurance, total }) => {
  return (
    <div className="row top-buffer">
      <p>{`Interest rate from ${interest}%, APR from ${apr}%, insurance ${insurance} CZK / Monthly, 
      fee for negotiation online 0 CZK, total pay ${total} CZK`}</p>
    </div>
  );
};

SummaryLoan.propTypes = {
  apr: PropTypes.number,
  insurance: PropTypes.number,
  interest: PropTypes.number,
  total: PropTypes.number
}

const mapStateToProps = state => {
  return {
    interest: state.summary.interest,
    apr: state.summary.apr,
    insurance: state.summary.insurance,
    total: state.summary.total,
  };
};

export default connect(mapStateToProps)(SummaryLoan);
