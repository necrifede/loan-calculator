
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { updateSummaries } from '../../actionCreators';
import { CALC_LOAN_SEND_DEBOUNCE, QUERY_CANCELLED } from '../actions';
import { server } from '../../config';

const { map, switchMap, debounceTime, takeUntil, withLatestFrom } = require('rxjs/operators');

const url = `http://${server.host}:${server.port}`;

export const requestLoanCalcDebounce = () => ({ type: CALC_LOAN_SEND_DEBOUNCE });
export const cancelRequest = () => ({ type: QUERY_CANCELLED, payload: {} });

const calculateLoanDebounceEpic = (action$, state$) => action$.pipe(
  ofType(CALC_LOAN_SEND_DEBOUNCE),
  debounceTime(1000),
  withLatestFrom(state$),
  switchMap(([, state]) =>
    ajax.getJSON(`${url}/loan?amount=${state.borrow.value}&time=${state.months.value}&insurance=${state.insurance.with}`).pipe(
      map(response => updateSummaries(response)),
      takeUntil(action$.ofType(QUERY_CANCELLED))
    )
  )
);

export default calculateLoanDebounceEpic;
