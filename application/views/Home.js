import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {TopActionBarComponent} from '../components/TopActionBar';
import {TodoListComponent} from '../components/TodoList';

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
            list: []
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
        alert(text);
    }

    _onToggleAll() {
        console.log('toggle');
    }

    render() {
        // const {navigate} = this.props.navigation;
        const {list} = this.state;
        return (
            <View style={ styles.mainContainer }>
              <TopActionBarComponent list={ list } onAddTodo={ this._onAddTodo.bind(this) } onToggleAll={ this._onToggleAll.bind(this) } />
              <TodoListComponent loading={ this.state.loading } list={ list } />
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
