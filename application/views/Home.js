import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import autobind from 'autobind-decorator';

import {TopActionBar} from '../components/TopActionBar';
import {TodoList} from '../components/TodoList';
import {TodoFilter} from '../components/TodoFilter';

import {fetchTodos, addTodo, updateTodo, toggleLoading, deleteTodo, changeFilter, toggleAll, gotoEdit} from '../redux/action';

@connect(state => ({
    todo: state.todo
}))
export class HomeView extends React.Component {
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

    @autobind
    _onAddTodo(text) {
        this.props.dispatch(addTodo({
            title: text,
            completed: false
        }));
    }

    @autobind
    _onTodoCompleted(todo) {
        this.props.dispatch(updateTodo(todo.title, {
            title: todo.title,
            completed: !todo.completed
        }));
    }

    @autobind
    _onToggleAll(isAll) {
        this.props.dispatch(toggleAll(!isAll));
    }

    @autobind
    _onFiltering(filter) {
        this.props.dispatch(changeFilter(filter));
    }

    @autobind
    _goEdit(todo) {
        this.props.dispatch(gotoEdit(todo));
    }

    @autobind
    _deleteTodo(todo) {
        this.props.dispatch(deleteTodo(todo));
    }

    render() {
        const {todoList, loading, filter} = this.props.todo;
        return (
            <View style={ styles.mainContainer }>
              <TopActionBar list={ todoList } onAddTodo={ this._onAddTodo } onToggleAll={ this._onToggleAll } />
              <TodoList loading={ loading } list={ todoList } filter={ filter } onTodoCompleted={ this._onTodoCompleted } onTodoEdit={ this._goEdit }
                onTodoDelete={ this._deleteTodo } />
              <TodoFilter loading={ loading } onSelect={ this._onFiltering } />
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
