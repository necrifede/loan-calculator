import React, { useMemo } from 'react'
import Slider from 'react-rangeslider'
import { useLoanStore } from 'src/store/loanStore'
import { debounce } from 'src/utils/debounce'

// TODO: refactor constant values in attributes
// TODO: Warning: Failed prop type: Invalid prop `value` of type `string` supplied to `Slider`, expected `number`.
// TODO: control integer values

/**
 * Shows in UI the amount of lend, or to borrow.
 */
const Borrow = () => {
  const { value, min, max } = useLoanStore(state => state.borrow)
  const updateLoanValue = useLoanStore(state => state.updateLoanValue)
  const cancelLoanCalculation = useLoanStore(state => state.cancelLoanCalculation)
  const loanCalculation = useLoanStore(state => state.loanCalculation)

  const handleLoanCalculation = useMemo(() => debounce(loanCalculation), [])

  return (
    <div className='row  top-buffer'>
      <div className='col-sm-8'>
        <h5 className='sectionTitle'>How much I want to borrow</h5>
        <Slider
          value={value}
          min={min}
          max={max}
          orientation='horizontal'
          labels={{ [min]: `${min} Kč`, [max]: `${max} Kč` }}
          step={100}
          onChangeStart={cancelLoanCalculation}
          onChange={value => updateLoanValue(value)}
          tooltip={false}
          onChangeComplete={handleLoanCalculation}
          style={{ fontSize: '12px' }}
        />
      </div>
      <div className='col-sm-3'>
        <input
          className='loanAmount form-control center'
          type='number'
          onChange={event => {
            updateLoanValue(event.target.value)
            cancelLoanCalculation()
            handleLoanCalculation()
          }}
          value={value}
        />
      </div>
      <div className='col-sm-1 text-left pl-0'>Kč</div>
    </div>
  )
}

export default Borrow
