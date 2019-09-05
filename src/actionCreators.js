import actions from './store/actions';

function updateLoanValue(value) {
  return {
    type: actions.UPDATE_LOAN,
    value,
  };
}

function updateMonthsValue(value) {
  return {
    type: actions.UPDATE_MONTHS,
    value,
  };
}

function updateInsuranceValue(value) {
  return {
    type: actions.UPDATE_WITH_INSURANCE,
    value,
  };
}

function updateSummaries(payload) {
  return {
    type: actions.UPDATE_SUMMARY_FIELDS,
    payload,
  };
}

export {
  updateLoanValue,
  updateMonthsValue,
  updateInsuranceValue,
  updateSummaries,
};
