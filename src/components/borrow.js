import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-rangeslider'
import { input } from 'react-bootstrap';
import { updateLoanValue } from '../actionCreators.js'

import { requestLoanCalcDebounce, cancelRequest } from '../store/epics/calcLoanDebounce'

// TODO: refactor constant values in attributes
// TODO: Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `Slider`, expected `number`.
// TODO: control integer values

/**
 * Shows in UI the amount of lend, or to borrow.
 */
class Borrow extends Component{

  updateLoan(event) {
    this.props.updateLoan(event.target.value)
  }
  sliderChangeStart(event) {
    this.props.cancelRequest()
  }
  sliderChange(event){
    this.props.updateLoan(event)
  }
  sliderChangeComplete(event) {
    this.props.requestCalculation(this.props.value, this.props.time, this.props.insurance)
  }
  render() {
    return (
        <div className="row  top-buffer">
          <div className="col-sm-8">
            <h5 className="sectionTitle">How much I want to borrow</h5>
            <Slider value={this.props.value}
              min={this.props.min}
              max={this.props.max}
              orientation="horizontal"
              labels={{[this.props.min]:`${this.props.min}Kč`, [this.props.max]:`${this.props.max}Kč`}} 
              step={100}
              onChangeStart={this.sliderChangeStart.bind(this)}
              onChange={this.sliderChange.bind(this)}
              tooltip={false}
              onChangeComplete={this.sliderChangeComplete.bind(this)}
              style={{fontSize: '12px'}}
            />
          </div>
          <div className="col-sm-3">
            <input 
              className="loanAmount form-control center"
              type="text"
              rows="5"
              onChange={this.updateLoan.bind(this)}
              value={this.props.value}/>
          </div>
          <div className="col-sm-1 text-left">Kč</div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.borrow.value,
    min: state.borrow.min,
    max: state.borrow.max,
    time: state.months.value,
    insurance: state.insurance.with
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLoan: newValue => {
      dispatch(updateLoanValue(newValue))
    },
    requestCalculation: (value, time, insurance) => 
      dispatch(requestLoanCalcDebounce(value, time, insurance)),
    cancelRequest: () => 
      dispatch(cancelRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Borrow)