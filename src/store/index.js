import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
// import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log('dispatching: ', action);
  let result = next(action);
  console.log('next state: ', store.getState());
  return result;
}

const extension = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// export default createStore(reducer, applyMiddleware(thunk))
export default createStore(reducer, extension, applyMiddleware(logger))
