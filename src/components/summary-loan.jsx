import React from 'react'
import { useLoanStore } from 'src/store/loanStore'

/**
 * Component shows a label with a summary of loan information
 *
 * @param {number} interest - Interest taken into account for the payment, expresed in percentage
 * @param {number} apr - from czech 'RPSN', it means APR (annual or annualized percentage rate)
 * @param {number} insurance - Percentage taken into account for the calculation
 * @param {number} total - Total amount payed after complete all payments
 */
const SummaryLoan = () => {
  const { interest, apr, insurance, total } = useLoanStore(state => state.summary)

  return (
    <div className='row top-buffer'>
      <p>{`Interest rate from ${interest * 100} %, APR from ${apr} %, insurance ${insurance} CZK / Monthly, fee for negotiation online 0 CZK, total pay ${Number(Math.round(total * 100) / 100).toLocaleString()} CZK`}
      </p>
    </div>
  )
}

export default SummaryLoan
