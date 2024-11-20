import React from 'react'
import { useLoanStore } from 'src/store/loanStore'

/**
 * Control the UI component Radio buttons to select the option with or without insurance
 */
const Insurance = () => {
  const { withi } = useLoanStore(state => state.insurance)
  const updateInsurance = useLoanStore(state => state.updateInsurance)
  const loanCalculation = useLoanStore(state => state.loanCalculation)
  const cancelLoanCalculation = useLoanStore(state => state.cancelLoanCalculation)

  return (
    <div>
      <div className='row top-buffer'>
        <div className='col-sm-12'>
          <h5 className='sectionTitle'>Insurance against inability to repay the loan</h5>
        </div>
      </div>
      <div className='row'>
        <div className='custom-control custom-radio custom-control-inline'>
          <input
            type='radio'
            id='withInsuranceRadio'
            className='custom-control-input'
            name='insuranceRadio'
            checked={withi === true}
            onChange={() => {
              updateInsurance(true)
              cancelLoanCalculation()
              loanCalculation()
            }}
          />
          <label className='custom-control-label' htmlFor='withInsuranceRadio'>
            With insurance
          </label>
        </div>
        <div className='custom-control custom-radio custom-control-inline'>
          <input
            type='radio'
            id='withoutInsuranceRadio'
            className='custom-control-input'
            name='insuranceRadio'
            checked={withi === false}
            onChange={() => {
              updateInsurance(false)
              cancelLoanCalculation()
              loanCalculation()
            }}
          />
          <label className='custom-control-label' htmlFor='withoutInsuranceRadio'>
            Without insurance
          </label>
        </div>
      </div>
    </div>
  )
}

export default Insurance
