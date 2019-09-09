import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { requestLoanCalc } from '../actionCreators';

/**
 * Display the amount to pay monthly
 */
const MonthlyPay = ({ monthly, requestLoanCalc }) => {
	return (
		<div className="container">
			<p className="container">Monthly Pay</p>
			<h1 className="container">{`${Math.trunc(monthly)} Kč`}</h1>
			<Button className="row" type="submit" onClick={() => requestLoanCalc(10000, 24, 0.6)}>
				Continue
			</Button>
		</div>
	);
};

MonthlyPay.propTypes = {
	monthly: PropTypes.number,
	requestLoanCalc: PropTypes.func,
};

const mapStateToProps = state => ({ monthly: state.summary.monthly });

export default connect(
	mapStateToProps,
	{ requestLoanCalc }
)(MonthlyPay);
