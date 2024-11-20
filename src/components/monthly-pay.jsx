import React from 'react'
import { Button } from 'react-bootstrap'
import { useLoanStore } from 'src/store/loanStore'

/**
 * Display the amount to pay monthly
 */
const MonthlyPay = () => {
  const { monthly } = useLoanStore(state => state.summary)
  const fetching = useLoanStore(state => state.fetching)
  const requestLoanCalc = useLoanStore(state => state.requestLoanCalc)

  return (
    <div className='container'>
      <p className='container'>Monthly Pay</p>
      <div className='position-relative'>
        <h1 className='container' style={{ color: fetching ? 'gray' : 'black' }}>{`${Number(Math.trunc(monthly)).toLocaleString()} Kč`}</h1>
        {fetching && (
          <div className='position-absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className='spinner-grow text-primary' style={{ width: '3rem', height: '3rem' }} role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Button className='row' type='submit' disabled={fetching} onClick={() => requestLoanCalc(10000, 24, 0.6)}>
        Continue
      </Button>
    </div>
  )
}

export default MonthlyPay
