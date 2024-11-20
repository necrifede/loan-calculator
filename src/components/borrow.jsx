import { Slider } from '@nextui-org/slider'
import React, { useMemo } from 'react'
import { useLoanStore } from 'src/store/loanStore'
import { debounce } from 'src/utils/debounce'

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
    <div className='row top-buffer my-4'>
      <div className='col-sm-8'>
        <h5 className='sectionTitle'>How much I want to borrow</h5>
        <Slider
          className='max-w-md'
          aria-label='slider-borrow'
          defaultValue={value}
          minValue={min}
          maxValue={max}
          orientation='horizontal'
          step={1}
          onChange={value => {
            cancelLoanCalculation()
            updateLoanValue(value)
          }}
          onChangeEnd={handleLoanCalculation}
          marks={[
            { value: min, label: `${min}\u00A0Kč` },
            { value: max, label: `${max}\u00A0Kč` }
          ]}
        />
      </div>
      <div className='col-sm-4 d-flex align-items-center'>
        <div className='row'>
          <div className='col-sm-8'>
            <input
              className='loanAmount form-control'
              type='number'
              onChange={event => {
                updateLoanValue(event.target.value)
                cancelLoanCalculation()
                handleLoanCalculation()
              }}
              value={value}
            />
          </div>
          <div className='col-sm-4 text-left'>Kč</div>
        </div>
      </div>
    </div>
  )
}

export default Borrow
