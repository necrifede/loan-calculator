import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { updateSummaries } from '../actionCreators';
import actions from '../actions';
import { Requests } from '../../utils';

const calculateLoanEpic = action$ =>
	action$.pipe(
		ofType(actions.CALC_LOAN_SEND),
		mergeMap(({ payload }) =>
			ajax
				.getJSON(Requests.adjustLoan(payload.amount, payload.time, payload.insurance))
				.pipe(map(response => updateSummaries(response)))
		)
	);

export default calculateLoanEpic;
