
import {TODO_TYPES} from '../action';

const {assign} = Object;

export const todo = (state = {
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
};
