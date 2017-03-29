import React from 'react';
import {StyleSheet, Text} from 'react-native';
import autobind from 'autobind-decorator';

import Tabs from 'react-native-tabs';


export class TodoFilterComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'all'
        };
    }

    @autobind
    _onSelect(el) {
        this.setState({
            page: el.props.name
        });
        this.props.onSelect(el.props.name);
    }

    render() {
        if (this.props.loading) {
            return false;
        }
        return (
            <Tabs selected={ this.state.page } style={ styles.tabs } selectedStyle={ styles.selected } onSelect={ this._onSelect }>
              <Text name='all'>All</Text>
              <Text name='active'>Active</Text>
              <Text name='completed'>Completed</Text>
            </Tabs>
            );
    }
}

TodoFilterComponent.propTypes = {
    loading: React.PropTypes.bool.isRequired,
    onSelect: React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    tabs: {
        backgroundColor: '#fff'
    },
    selected: {
        color: '#000',
        fontWeight: 'bold'
    }
});
