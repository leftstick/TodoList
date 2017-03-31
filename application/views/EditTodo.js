import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import autobind from 'autobind-decorator';

import {updateTodo, gotoHome} from '../redux/action';

@connect()
export class EditTodoView extends React.Component {
    static navigationOptions = {
        title: 'Edit'
    };

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.navigation.state.params.todo.title
        };
    }

    @autobind
    _onInputChanged(text) {
        this.setState({
            text
        });
    }

    @autobind
    _onConfirmEdit() {
        if (!this.state.text) {
            return;
        }
        this.props.dispatch(updateTodo(this.props.navigation.state.params.todo.title, {
            title: this.state.text,
            completed: this.props.navigation.state.params.todo.completed
        }));
        this.props.dispatch(gotoHome());
    }

    render() {
        return (
            <View style={ styles.view }>
              <TextInput style={ styles.input } placeholder='Type title for it' placeholderTextColor='#a9a9a9' value={ this.state.text } onChangeText={ this._onInputChanged }
              />
              <Button title='Confirm' onPress={ this._onConfirmEdit } />
            </View>
            );
    }
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 5,
        paddingRight: 5
    }
});
