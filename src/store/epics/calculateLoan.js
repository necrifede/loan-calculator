
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { updateSummaries } from '../../actionCreators';
import CALC_LOAN_SEND from '../actions';
import { server } from '../../config';

const { map, mergeMap } = require('rxjs/operators');

const url = `http://${server.host}:${server.port}`;

export const requestLoanCalc = (amount, time, insurance) => ({ type: CALC_LOAN_SEND, payload: { amount, time, insurance } });

const calculateLoanEpic = action$ => action$.pipe(
  ofType(CALC_LOAN_SEND),
  mergeMap(({ payload }) =>
    ajax.getJSON(`${url}/loan?amount=${payload.amount}&time=${payload.time}&insurance=${payload.insurance}`).pipe(
      map(response => updateSummaries(response))
    )
  )
);

export default calculateLoanEpic;
