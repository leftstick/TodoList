import {combineReducers, createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {NavigationActions} from 'react-navigation';

import {StackNavigation} from '../navigation';
import {TODO_TYPES} from './todoActions';
import {NAV_TYPES} from './navActions';

const {assign} = Object;

export const todoStore = createStore(
    combineReducers({
        stackNav: (state, action) => {

            if (action.type === NAV_TYPES.GOTO_HOME) {
                return StackNavigation.router.getStateForAction(NavigationActions.back(), state);
            }

            if (action.type === NAV_TYPES.GOTO_EDIT) {
                return StackNavigation.router.getStateForAction(NavigationActions.navigate({
                    routeName: 'EditTodo',
                    params: {
                        todo: action.payload
                    }
                }), state);
            }

            return StackNavigation.router.getStateForAction(action, state);
        },

        todo: (state = {
                todoList: [],
                loading: false,
                filter: 'all'
            }, action) => {

            if (action.type === TODO_TYPES.TOGGLE_LOADING) {
                return assign({}, state, {
                    loading: action.payload
                });
            }

            if (action.type === TODO_TYPES.FETCH_TODOS) {
                return assign({}, state, {
                    todoList: action.payload,
                    loading: false
                });
            }

            if (action.type === TODO_TYPES.ADD_TODO) {
                return assign({}, state, {
                    todoList: [...state.todoList, action.payload]
                });
            }

            if (action.type === TODO_TYPES.UPDATE_TODO) {
                return assign({}, state, {
                    todoList: state.todoList.map(t => {
                        if (action.payload.oldTitle === t.title) {
                            return action.payload.newTodo;
                        }
                        return t;
                    })
                });
            }

            if (action.type === TODO_TYPES.DELETE_TODO) {
                return assign({}, state, {
                    todoList: state.todoList.filter(t => t.title !== action.payload.title)
                });
            }

            if (action.type === TODO_TYPES.CHANGE_FILTER) {
                return assign({}, state, {
                    filter: action.payload
                });
            }

            if (action.type === TODO_TYPES.TOGGLE_ALL) {
                return assign({}, state, {
                    todoList: state.todoList.map(t => ({
                        title: t.title,
                        completed: action.payload
                    }))
                });
            }
            return state;
        }
    }),
    applyMiddleware(promiseMiddleware)
)
