import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';

export class TopActionBarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    _onInputChanged(text) {
        this.setState({
            text
        });
    }

    _onSubmit() {
        if (!this.state.text) {
            return;
        }
        this.props.onAddTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    _onToggleAll() {
        this.props.onToggleAll();
    }

    _toggleBtnColor() {
        if (!this.props.list.length || this.props.list.some(t => !t.completed)) {
            return '#e6e6e6';
        }
        return '#737373';
    }

    render() {
        return (
            <View style={ styles.view }>
              <Button style={ styles.toggleBtn } title='All' color={ this._toggleBtnColor() } onPress={ this._onToggleAll.bind(this) } />
              <TextInput style={ styles.todoInput } placeholder='What needs to be done?' placeholderTextColor='#a9a9a9' value={ this.state.text } onChangeText={ this._onInputChanged.bind(this) }
                onEndEditing={ this._onSubmit.bind(this) } />
            </View>
            );
    }
}

TopActionBarComponent.propTypes = {
    onAddTodo: React.PropTypes.func.isRequired,
    onToggleAll: React.PropTypes.func.isRequired,
    list: React.PropTypes.array.isRequired
};


const styles = StyleSheet.create({
    view: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
        backgroundColor: '#fff'
    },
    toggleBtn: {
        height: 40
    },
    todoInput: {
        height: 40,
        flex: 5
    }
});
