import { combineEpics } from 'redux-observable'
import calculateLoanEpic from './calculateLoan'
import calculateLoanDebounceEpic from './calcLoanDebounce'

// rootEpic
const epics = combineEpics(calculateLoanDebounceEpic, calculateLoanEpic)

export default epics
