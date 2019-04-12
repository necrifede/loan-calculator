// TODO: create config variables for type of actions

function updateLoanValue(value) {
  return {
    type: 'UPDATE_LOAN',
    value
  }
}

function updateMonthsValue(value) {
  return {
    type: 'UPDATE_MONTHS',
    value
  }
}

function updateInsuranceValue(value) {
  return {
    type: 'UPDATE_WITH_INSURANCE',
    value
  }
}

export {
  updateLoanValue,
  updateMonthsValue,
  updateInsuranceValue
}