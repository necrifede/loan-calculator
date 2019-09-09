import actions from './store/actions';

const updateLoanValue = value => ({
	type: actions.UPDATE_LOAN,
	value,
});

const updateMonthsValue = value => ({
	type: actions.UPDATE_MONTHS,
	value,
});

const updateInsuranceValue = value => ({
	type: actions.UPDATE_WITH_INSURANCE,
	value,
});

const updateSummaries = payload => ({
	type: actions.UPDATE_SUMMARY_FIELDS,
	payload,
});

const requestLoanCalc = (amount, time, insurance) => ({
	type: actions.CALC_LOAN_SEND,
	payload: { amount, time, insurance },
});

const requestLoanCalcDebounce = () => ({ type: actions.CALC_LOAN_SEND_DEBOUNCE });

const cancelRequest = () => ({ type: actions.QUERY_CANCELLED, payload: {} });

export {
	updateLoanValue,
	updateMonthsValue,
	updateInsuranceValue,
	updateSummaries,
	requestLoanCalc,
	requestLoanCalcDebounce,
	cancelRequest,
};
