import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware();

const logger = store => next => action => {
	console.log('dispatching: ', action);
	const result = next(action);
	console.log('next state: ', store.getState());
	return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(logger, epicMiddleware)));
epicMiddleware.run(epics);
