
import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable'
import { updateSummaries } from '../../actionCreators'
import { CALC_LOAN_SEND_DEBOUNCE } from '../actions'
import { QUERY_CANCELLED } from '../actions'
import { server } from '../../config'

const { map, switchMap, debounceTime, takeUntil } = require('rxjs/operators');

const url = `http://${server.host}:${server.port}`

export const requestLoanCalcDebounce = (amount, time, insurance) => 
  ({ type: CALC_LOAN_SEND_DEBOUNCE, payload: { amount, time, insurance } })
export const cancelRequest = () => ({ type: QUERY_CANCELLED, payload: { } })

const calculateLoanDebounceEpic = action$  => action$.pipe(
  ofType(CALC_LOAN_SEND_DEBOUNCE),
  debounceTime(1000),
  switchMap(({ payload }) => 
    ajax.getJSON(`${url}/loan?amount=${payload.amount}&time=${payload.time}&insurance=${payload.insurance}`).pipe(
      map(response => updateSummaries(response)),
      takeUntil(action$.ofType(QUERY_CANCELLED))
    )
  )
);

export default calculateLoanDebounceEpic
