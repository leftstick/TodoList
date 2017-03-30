import {combineReducers, createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import {stackNav} from './stackNavigationReducer';
import {todo} from './todoReducer';

export const store = createStore(
    combineReducers({
        stackNav,
        todo
    }),
    applyMiddleware(promiseMiddleware)
)
