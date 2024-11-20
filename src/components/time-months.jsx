import React from 'react'
import Slider from 'react-rangeslider'
import { useLoanStore } from 'src/store/loanStore'

const TimeMonths = () => {
  const { value, min, max } = useLoanStore(state => state.months)
  const loanCalculation = useLoanStore(state => state.loanCalculation)
  const updateMonthsValue = useLoanStore(state => state.updateMonthsValue)
  const cancelLoanCalculation = useLoanStore(state => state.cancelLoanCalculation)

  return (
    <div className='row top-buffer'>
      <div className='col-sm-8'>
        <h5 className='sectionTitle'>For how long</h5>
        <Slider
          value={value}
          min={min}
          max={max}
          orientation='horizontal'
          labels={{ [min]: `${min} Month`, [max]: `${max} Months` }}
          step={1}
          onChangeStart={cancelLoanCalculation}
          onChange={value => updateMonthsValue(value)}
          tooltip={false}
          onChangeComplete={() => loanCalculation()}
          style={{ fontSize: '12px' }}
        />
      </div>
      <div className='col-sm-3'>
        <input
          className='loanAmount form-control center'
          type='number'
          onChange={event => {
            // TODO: validate value is a inside range
            updateMonthsValue(event.target.value)
            loanCalculation()
          }}
          value={value}
        />
      </div>
      <div className='col-sm-1 text-left pl-0'>Months</div>
    </div>
  )
}

export default TimeMonths
