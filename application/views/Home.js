import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import {TopActionBarComponent} from '../components/TopActionBar';
import {TodoListComponent} from '../components/TodoList';
import {TodoFilterComponent} from '../components/TodoFilter';

import {fetchTodos, addTodo, updateTodo, toggleLoading, deleteTodo, changeFilter, toggleAll} from '../store/todoActions';
import {gotoEdit} from '../store/navActions';

@connect(state => ({
    todo: state.todo
}))
export class HomeComponent extends React.Component {
    static navigationOptions = {
        title: 'TodoList'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(toggleLoading(true));
        this.props.dispatch(fetchTodos());
    }

    _onAddTodo(text) {
        this.props.dispatch(addTodo({
            title: text,
            completed: false
        }));
    }

    _onTodoCompleted(todo) {
        this.props.dispatch(updateTodo(todo.title, {
            title: todo.title,
            completed: !todo.completed
        }));
    }

    _onToggleAll(isAll) {
        this.props.dispatch(toggleAll(!isAll));
    }

    _onFiltering(filter) {
        this.props.dispatch(changeFilter(filter));
    }

    _goEdit(todo) {
        this.props.dispatch(gotoEdit(todo));
    }

    _deleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    render() {
        const {todoList, loading, filter} = this.props.todo;
        return (
            <View style={ styles.mainContainer }>
              <TopActionBarComponent list={ todoList } onAddTodo={ this._onAddTodo.bind(this) } onToggleAll={ this._onToggleAll.bind(this) } />
              <TodoListComponent loading={ loading } list={ todoList } filter={ filter } onTodoCompleted={ this._onTodoCompleted.bind(this) } onTodoEdit={ this._goEdit.bind(this) }
                onTodoDelete={ this._deleteTodo.bind(this) } />
              <TodoFilterComponent loading={ loading } onSelect={ this._onFiltering.bind(this) } />
            </View>
            );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
