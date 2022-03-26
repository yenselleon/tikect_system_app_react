import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* import persidState from 'redux-localstorage'
import { setLocalStorageReducer } from '../reducers/setLocalStorageReducer'; */
import ticketReducer from '../reducers/tikect/reducer';
import queueReducer from '../reducers/queue/reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ticket: ticketReducer,
    queue: queueReducer
});

/* let config = {
    key: 'lastViewAndBookmarks'
} */

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
        /* persidState('localStoragedata', config) */
    )
);

export default store;