import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider';
import { updateMonthsValue } from '../actionCreators.js';
import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce';

class TimeMonts extends Component {
  constructor(props) {
    super(props);
    this.updateLoan = this.updateLoan.bind(this);
    this.sliderChangeStart = this.sliderChangeStart.bind(this);
    this.sliderChange = this.sliderChange.bind(this);
    this.sliderChangeComplete = this.sliderChangeComplete.bind(this);
  }

  updateLoan(event) {
    this.props.updateLoanValue(event.target.value);
    this.props.cancelRequest();
    this.props.requestCalculation();
  }
  sliderChangeStart(event) {
    this.props.cancelRequest();
  }
  sliderChange(value) {
    this.props.updateLoanValue(value);
  }
  sliderChangeComplete(event) {
    this.props.requestCalculation();
  }
  render() {
    return (
        <div className="row top-buffer">
          <div className="col-sm-8">
            <h5 className="sectionTitle">For how long</h5>
            <Slider
	value={this.props.value}
	min={this.props.min}
	max={this.props.max}
	orientation="horizontal"
	labels={{[this.props.min]: `${this.props.min}Kč`, [this.props.max]: `${this.props.max}Kč`}}
	step={1}
	onChangeStart={this.sliderChangeStart}
	onChange={this.sliderChange}
	tooltip={false}
	onChangeComplete={this.sliderChangeComplete}
	style={{fontSize: '12px'}}
            />
          </div>
          <div className="col-sm-3">
            <input
	className="loanAmount form-control center"
	type="text"
	rows="5"
	onChange={this.updateLoan}
	value={this.props.value}
            />
          </div>
          <div className="col-sm-1 text-left">Kč</div>
        </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeMonts);
