import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import PropTypes from 'prop-types'
import { updateMonthsValue, requestLoanCalcDebounce, cancelRequest } from '../store/actionCreators'

const TimeMonths = ({
  updateMonthsValue,
  cancelRequest,
  requestLoanCalcDebounce,
  value,
  min,
  max
}) => (
  <div className='row top-buffer'>
    <div className='col-sm-8'>
      <h5 className='sectionTitle'>For how long</h5>
      <Slider
        value={value}
        min={min}
        max={max}
        orientation='horizontal'
        labels={{ [min]: `${min}Kč`, [max]: `${max}Kč` }}
        step={1}
        onChangeStart={cancelRequest}
        onChange={value => updateMonthsValue(value)}
        tooltip={false}
        onChangeComplete={requestLoanCalcDebounce}
        style={{ fontSize: '12px' }}
      />
    </div>
    <div className='col-sm-3'>
      <input
        className='loanAmount form-control center'
        type='text'
        rows='5'
        onChange={event => {
          updateMonthsValue(event.target.value)
          cancelRequest()
          requestLoanCalcDebounce()
        }}
        value={value}
      />
    </div>
    <div className='col-sm-1 text-left'>Kč</div>
  </div>
)

TimeMonths.propTypes = {
  cancelRequest: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  requestLoanCalcDebounce: PropTypes.func,
  updateMonthsValue: PropTypes.func,
  value: PropTypes.number
}

const mapStateToProps = state => ({
  value: state.months.value,
  min: state.months.min,
  max: state.months.max
})

export default connect(
  mapStateToProps,
  { updateMonthsValue, requestLoanCalcDebounce, cancelRequest }
)(TimeMonths)
