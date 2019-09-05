import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInsuranceValue } from '../actionCreators';
import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce';

/**
 * Control the UI component Radio buttons to select the option with or without insurance
 */
class Insurance extends Component {
  updateBoolInsurance(value) {
    this.props.updateInsurance(value);
    this.props.cancelRequest();
    this.props.requestCalculation();
  }

  render() {
    return (
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
	checked={this.props.with === true}
	onChange={this.updateBoolInsurance.bind(this, true)}
            />
            <label className="custom-control-label" htmlFor="withInsuranceRadio">With insurance</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
	type="radio" id="withoutInsuranceRadio" className="custom-control-input"
	name="insuranceRadio"
	checked={this.props.with === false}
	onChange={this.updateBoolInsurance.bind(this, false)}
            />
            <label className="custom-control-label" htmlFor="withoutInsuranceRadio">Without insurance</label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    with: state.insurance.with,
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
