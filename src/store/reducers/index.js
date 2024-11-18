import { combineReducers } from 'redux'
import borrow from './borrow'
import months from './time-months'
import insurance from './insurance'
import summary from './summary-loan'

/**
 * Put all reducers together to create the store
 */
const reducer = combineReducers({ borrow, months, insurance, summary })

export default reducer
