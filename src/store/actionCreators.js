const actions = {
  UPDATE_LOAN: 'UPDATE_LOAN',
  UPDATE_WITH_INSURANCE: 'UPDATE_WITH_INSURANCE',
  UPDATE_MONTHS: 'UPDATE_MONTHS',
  CALC_LOAN_SEND: 'CALC_LOAN_SEND',
  UPDATE_SUMMARY_FIELDS: 'UPDATE_SUMMARY_FIELDS',
  CALC_LOAN_SEND_DEBOUNCE: 'CALC_LOAN_SEND_DEBOUNCE',
  QUERY_CANCELLED: 'QUERY_CANCELLED'
}

const updateLoanValue = value => ({
  type: actions.UPDATE_LOAN,
  value
})

const updateMonthsValue = value => ({
  type: actions.UPDATE_MONTHS,
  value
})

const updateInsuranceValue = value => ({
  type: actions.UPDATE_WITH_INSURANCE,
  value
})

const updateSummaries = payload => ({
  type: actions.UPDATE_SUMMARY_FIELDS,
  payload
})

const requestLoanCalc = (amount, time, insurance) => ({
  type: actions.CALC_LOAN_SEND,
  payload: { amount, time, insurance }
})

const requestLoanCalcDebounce = () => ({ type: actions.CALC_LOAN_SEND_DEBOUNCE })

const cancelRequest = () => ({ type: actions.QUERY_CANCELLED, payload: {} })

export {
  updateLoanValue,
  updateMonthsValue,
  updateInsuranceValue,
  updateSummaries,
  requestLoanCalc,
  requestLoanCalcDebounce,
  cancelRequest,
  actions
}
