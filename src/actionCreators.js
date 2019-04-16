import actions from './store/actions'

function updateLoanValue(value) {
  return {
    type: actions.UPDATE_LOAN,
    value
  }
}

function updateMonthsValue(value) {
  return {
    type: actions.UPDATE_MONTHS,
    value
  }
}

function updateInsuranceValue(value) {
  return {
    type: actions.UPDATE_WITH_INSURANCE,
    value
  }
}

export {
  updateLoanValue,
  updateMonthsValue,
  updateInsuranceValue
}