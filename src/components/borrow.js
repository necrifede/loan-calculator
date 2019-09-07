import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import { input } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { updateLoanValue } from '../actionCreators';
import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce';

// TODO: refactor constant values in attributes
// TODO: Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `Slider`, expected `number`.
// TODO: control integer values

/**
 * Shows in UI the amount of lend, or to borrow.
 */
const Borrow = ({ updateLoanValue, cancelRequest, requestCalculation, value, min, max }) => (
	<div className="row  top-buffer">
		<div className="col-sm-8">
			<h5 className="sectionTitle">How much I want to borrow</h5>
			<Slider
				value={value}
				min={min}
				max={max}
				orientation="horizontal"
				labels={{ [min]: `${min}Kč`, [max]: `${max}Kč` }}
				step={100}
				onChangeStart={cancelRequest}
				onChange={value => updateLoanValue(value)}
				tooltip={false}
				onChangeComplete={requestCalculation}
				style={{ fontSize: '12px' }}
			/>
		</div>
		<div className="col-sm-3">
			<input
				className="loanAmount form-control center"
				type="text"
				rows="5"
				onChange={event => {
					updateLoanValue(event.target.value);
					cancelRequest();
					requestCalculation();
				}}
				value={value}
			/>
		</div>
		<div className="col-sm-1 text-left">Kč</div>
	</div>
);

Borrow.propTypes = {
	cancelRequest: PropTypes.func,
	max: PropTypes.number,
	min: PropTypes.number,
	requestCalculation: PropTypes.func,
	updateLoanValue: PropTypes.func,
	value: PropTypes.number,
};

const mapStateToProps = state => {
	return {
		value: state.borrow.value,
		min: state.borrow.min,
		max: state.borrow.max,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateLoanValue: newValue => dispatch(updateLoanValue(newValue)),
		requestCalculation: () => dispatch(requestLoanCalcDebounce()),
		cancelRequest: () => dispatch(cancelRequest()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Borrow);
