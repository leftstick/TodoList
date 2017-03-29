import {createAction} from 'redux-actions';


export const TODO_TYPES = {
    FETCH_TODOS: 'FETCH_TODOS',
    ADD_TODO: 'ADD_TODO',
    UPDATE_TODO: 'UPDATE_TODO',
    TOGGLE_LOADING: 'TOGGLE_LOADING',
    DELETE_TODO: 'DELETE_TODO',
    CHANGE_FILTER: 'CHANGE_FILTER',
    TOGGLE_ALL: 'TOGGLE_ALL'
};

export const fetchTodos = createAction(TODO_TYPES.FETCH_TODOS, async () => {
    return await new Promise(function(resolve) {
            setTimeout(function() {
                resolve([
                    {
                        title: 'Learn AngularJS',
                        completed: true
                    },
                    {
                        title: 'Learn TypeScript',
                        completed: false
                    },
                    {
                        title: 'Learn gulp',
                        completed: true
                    },
                    {
                        title: 'Learn webpack',
                        completed: false
                    }
                ]);
            }, 1500);
        });
});


export const addTodo = createAction(TODO_TYPES.ADD_TODO, todo => todo);

export const updateTodo = createAction(TODO_TYPES.UPDATE_TODO, (oldTitle, newTodo) => ({
    oldTitle,
    newTodo
}));

export const deleteTodo = createAction(TODO_TYPES.DELETE_TODO, todo => todo);

export const toggleAll = createAction(TODO_TYPES.TOGGLE_ALL, bool => bool);

export const changeFilter = createAction(TODO_TYPES.CHANGE_FILTER, filter => filter);

export const toggleLoading = createAction(TODO_TYPES.TOGGLE_LOADING, (bool = false) => bool);
