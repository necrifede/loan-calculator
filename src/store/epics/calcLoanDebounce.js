import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, switchMap, debounceTime, takeUntil, withLatestFrom } from 'rxjs/operators';
import { updateSummaries } from '../actionCreators';
import { Requests } from '../../utils';
import actions from '../actions';

const calculateLoanDebounceEpic = (action$, state$) =>
	action$.pipe(
		ofType(actions.CALC_LOAN_SEND_DEBOUNCE),
		debounceTime(1000),
		withLatestFrom(state$),
		switchMap(([, state]) =>
			ajax
				.getJSON(Requests.adjustLoan(state.borrow.value, state.months.value, state.insurance.withi))
				.pipe(
					map(response => updateSummaries(response)),
					takeUntil(action$.ofType(actions.QUERY_CANCELLED))
				)
		)
	);

export default calculateLoanDebounceEpic;
