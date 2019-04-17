import { combineEpics } from 'redux-observable'
import calculateLoanEpic from './calculateLoan'

//rootEpic
const epics = combineEpics(calculateLoanEpic)

export default epics
