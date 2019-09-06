import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateInsuranceValue } from '../actionCreators';
import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce';

/**
 * Control the UI component Radio buttons to select the option with or without insurance
 */
const Insurance = ({ updateInsurance, cancelRequest, requestCalculation, withi }) =>
  (
    <div>
      <div className="row top-buffer">
        <div className="col-sm-12">
          <h5 className="sectionTitle">Insurance against inability to repay the loan</h5>
        </div>
      </div>
      <div className="row">
        <div className="custom-control custom-radio custom-control-inline">
          <input
	type="radio" id="withInsuranceRadio" className="custom-control-input"
	name="insuranceRadio"
	checked={withi === true}
	onChange={() => { updateInsurance(true); cancelRequest(); requestCalculation(); }}
          />
          <label className="custom-control-label" htmlFor="withInsuranceRadio">With insurance</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
	type="radio" id="withoutInsuranceRadio" className="custom-control-input"
	name="insuranceRadio"
	checked={withi === false}
	onChange={() => { updateInsurance(false); cancelRequest(); requestCalculation(); }}
          />
          <label className="custom-control-label" htmlFor="withoutInsuranceRadio">Without insurance</label>
        </div>
      </div>
    </div>
  )

Insurance.propTypes = {
  cancelRequest: PropTypes.func,
  requestCalculation: PropTypes.func,
  updateInsurance: PropTypes.func,
  withi: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    withi: state.insurance.withi,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInsurance: newValue => dispatch(updateInsuranceValue(newValue)),
    requestCalculation: () => dispatch(requestLoanCalcDebounce()),
    cancelRequest: () => dispatch(cancelRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Insurance);
