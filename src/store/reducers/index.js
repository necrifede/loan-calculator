


import { combineReducers } from 'redux'
import borrow from './borrow'
import months from './time-months'
import insurance from './insurance'

/**
 * Put all reducers together to create the store
 */
const reducer = combineReducers({ borrow, months, insurance })

export default reducer
