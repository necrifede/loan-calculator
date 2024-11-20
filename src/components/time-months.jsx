import { Slider } from '@nextui-org/slider'
import React, { useMemo } from 'react'
import { useLoanStore } from 'src/store/loanStore'
import { debounce } from 'src/utils/debounce'

const TimeMonths = () => {
  const { value, min, max } = useLoanStore(state => state.months)
  const loanCalculation = useLoanStore(state => state.loanCalculation)
  const updateMonthsValue = useLoanStore(state => state.updateMonthsValue)
  const cancelLoanCalculation = useLoanStore(state => state.cancelLoanCalculation)

  const handleLoanCalculation = useMemo(() => debounce(loanCalculation), [])

  return (
    <div className='row top-buffer  my-4'>
      <div className='col-sm-8'>
        <h5 className='sectionTitle'>For how long</h5>
        <Slider
          aria-label='slider-time-months'
          defaultValue={value}
          minValue={min}
          maxValue={max}
          orientation='horizontal'
          marks={[
            { value: min, label: `${min}\u00A0Months` },
            { value: max, label: `${max}\u00A0Months` }
          ]}
          step={1}
          onChange={value => {
            cancelLoanCalculation()
            updateMonthsValue(value)
          }}
          onChangeEnd={handleLoanCalculation}
        />
      </div>
      <div className='col-sm-4 d-flex align-items-center'>
        <div className='row'>
          <div className='col-sm-8'>
            <input
              className='loanAmount form-control'
              type='number'
              onChange={event => {
                // TODO: validate value is a inside range
                updateMonthsValue(event.target.value)
                cancelLoanCalculation()
                handleLoanCalculation()
              }}
              value={value}
            />
          </div>
          <div className='col-sm-4 text-left'>Months</div>
        </div>
      </div>
    </div>
  )
}

export default TimeMonths
