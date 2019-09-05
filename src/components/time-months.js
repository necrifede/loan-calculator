import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import { updateMonthsValue } from '../actionCreators';
import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce';

const TimeMonths = ({updateLoanValue, cancelRequest, requestCalculation, value, min, max }) =>
  (
    <div className="row top-buffer">
      <div className="col-sm-8">
        <h5 className="sectionTitle">For how long</h5>
        <Slider
	value={value}
	min={min}
	max={max}
	orientation="horizontal"
	labels={{ [min]: `${min}Kč`, [max]: `${max}Kč` }}
	step={1}
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
	onChange={event => { updateLoanValue(event.target.value);cancelRequest();requestCalculation();}}
	value={value}
        />
      </div>
      <div className="col-sm-1 text-left">Kč</div>
    </div>
  )

TimeMonths.propTypes = {
  cancelRequest: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  requestCalculation: PropTypes.func,
  updateLoanValue: PropTypes.func,
  value: PropTypes.number,
}

const mapStateToProps = state => {
  return {
    value: state.months.value,
    min: state.months.min,
    max: state.months.max,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoanValue: newValue => dispatch(updateMonthsValue(newValue)),
    requestCalculation: () => dispatch(requestLoanCalcDebounce()),
    cancelRequest: () => dispatch(cancelRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeMonths);
