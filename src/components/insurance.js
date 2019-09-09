import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateInsuranceValue, requestLoanCalcDebounce, cancelRequest } from '../actionCreators';

/**
 * Control the UI component Radio buttons to select the option with or without insurance
 */
const Insurance = ({ updateInsuranceValue, cancelRequest, requestLoanCalcDebounce, withi }) => (
	<div>
		<div className="row top-buffer">
			<div className="col-sm-12">
				<h5 className="sectionTitle">Insurance against inability to repay the loan</h5>
			</div>
		</div>
		<div className="row">
			<div className="custom-control custom-radio custom-control-inline">
				<input
					type="radio"
					id="withInsuranceRadio"
					className="custom-control-input"
					name="insuranceRadio"
					checked={withi === true}
					onChange={() => {
						updateInsuranceValue(true);
						cancelRequest();
						requestLoanCalcDebounce();
					}}
				/>
				<label className="custom-control-label" htmlFor="withInsuranceRadio">
					With insurance
				</label>
			</div>
			<div className="custom-control custom-radio custom-control-inline">
				<input
					type="radio"
					id="withoutInsuranceRadio"
					className="custom-control-input"
					name="insuranceRadio"
					checked={withi === false}
					onChange={() => {
						updateInsuranceValue(false);
						cancelRequest();
						requestLoanCalcDebounce();
					}}
				/>
				<label className="custom-control-label" htmlFor="withoutInsuranceRadio">
					Without insurance
				</label>
			</div>
		</div>
	</div>
);

Insurance.propTypes = {
	cancelRequest: PropTypes.func,
	requestLoanCalcDebounce: PropTypes.func,
	updateInsuranceValue: PropTypes.func,
	withi: PropTypes.bool,
};

const mapStateToProps = state => ({ withi: state.insurance.withi });

export default connect(
	mapStateToProps,
	{ updateInsuranceValue, requestLoanCalcDebounce, cancelRequest }
)(Insurance);
