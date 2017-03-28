import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {TopActionBarComponent} from '../components/TopActionBar';
import {TodoListComponent} from '../components/TodoList';
import {TodoFilterComponent} from '../components/TodoFilter';

import {getTodoList} from '../services/Todos';


export class HomeComponent extends React.Component {
    static navigationOptions = {
        title: 'TodoList'
    };

    constructor(props) {
        super(props);

        this.state = {
            inputTodo: '',
            loading: false,
            list: [],
            filter: 'all'
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        getTodoList()
            .then(list => {
                this.setState({
                    list,
                    loading: false
                });
            });
    }

    _onAddTodo(text) {
        this.setState({
            list: [...this.state.list, {
                title: text,
                completed: false
            }]
        });
    }

    _onTodoCompleted(todo) {
        this.setState({
            list: this.state.list.map(t => {
                if (t.title !== todo.title) {
                    return t;
                }
                return {
                    title: t.title,
                    completed: !t.completed
                };
            })
        });
    }

    _onToggleAll() {
        console.log('toggle');
    }

    _onFiltering(filter) {
        this.setState({
            filter
        });
    }

    render() {
        // const {navigate} = this.props.navigation;
        const {list} = this.state;
        return (
            <View style={ styles.mainContainer }>
              <TopActionBarComponent list={ list } onAddTodo={ this._onAddTodo.bind(this) } onToggleAll={ this._onToggleAll.bind(this) } />
              <TodoListComponent loading={ this.state.loading } list={ list } filter={ this.state.filter } onTodoCompleted={ this._onTodoCompleted.bind(this) } />
              <TodoFilterComponent loading={ this.state.loading } onSelect={ this._onFiltering.bind(this) } />
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
