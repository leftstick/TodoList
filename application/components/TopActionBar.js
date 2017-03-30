import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import autobind from 'autobind-decorator';

export class TopActionBarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    @autobind
    _onInputChanged(text) {
        this.setState({
            text
        });
    }

    @autobind
    _onSubmit() {
        if (!this.state.text) {
            return;
        }
        this.props.onAddTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    @autobind
    _onToggleAll() {
        if (!this.props.list.length) {
            return;
        }

        this.props.onToggleAll(!this.props.list.some(t => !t.completed));
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
              <Button style={ styles.toggleBtn } title='All' color={ this._toggleBtnColor() } onPress={ this._onToggleAll } />
              <TextInput underlineColorAndroid='transparent' style={ styles.todoInput } placeholder='What needs to be done?' placeholderTextColor='#a9a9a9' value={ this.state.text }
                onChangeText={ this._onInputChanged } onEndEditing={ this._onSubmit } />
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
