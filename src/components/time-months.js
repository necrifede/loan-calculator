import React, { Component } from 'react';
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import { updateMonthsValue } from '../actionCreators.js'

class TimeMonts extends Component {

  updateLoan(event) {
    this.props.updateLoan(event.target.value)
  }
  sliderChangeStart(event) {
    console.log("sliderChangeStart", event)
  }
  sliderChange(event){
    this.props.updateLoan(event)
  }
  sliderChangeComplete(event) {
    console.log("sliderChangeComplete", event)
  }
  render () {
    return (
        <div className="row top-buffer">
          <div className="col-sm-8">
            <h5 className="sectionTitle">For how long</h5>
            <Slider value={this.props.value}
              min={this.props.min}
              max={this.props.max}
              orientation="horizontal"
              labels={{[this.props.min]:`${this.props.min}Kč`, [this.props.max]:`${this.props.max}Kč`}} 
              step={1}
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
    value: state.months.value,
    min: state.months.min,
    max: state.months.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLoan: newValue => {
      dispatch(updateMonthsValue(newValue))
    },
    dispatch
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(TimeMonts)