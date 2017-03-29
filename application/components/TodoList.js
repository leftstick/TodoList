import React from 'react';
import {StyleSheet, View, ActivityIndicator, ListView} from 'react-native';
import autobind from 'autobind-decorator';

import CheckBox from 'react-native-checkbox';
import Swipeout from 'react-native-swipe-out';


export class TodoListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    _onItemSelect(todo) {
        this.props.onTodoCompleted(todo);
    }

    _getItemRightMenu(rowData) {
        return [{
            text: 'Edit',
            type: 'primary',
            onPress: () => {
                this.props.onTodoEdit(rowData);
            }
        }, {
            text: 'Delete',
            backgroundColor: 'red',
            onPress: () => {
                this.props.onTodoDelete(rowData);
            }
        }];
    }

    @autobind
    _listItem(rowData) {

        return (
            <Swipeout autoClose={ true } right={ this._getItemRightMenu(rowData) } backgroundColor='transparent'>
              <View style={ styles.item }>
                <CheckBox labelStyle={ styles.itemLabel } label={ rowData.title } checked={ rowData.completed } onChange={ () => this._onItemSelect(rowData) } />
              </View>
            </Swipeout>
            );
    }

    _getListWithFilter() {
        const {filter} = this.props;
        return this.ds.cloneWithRows(this.props.list.filter(t => {
            if (filter === 'all') {
                return true;
            }
            if (filter === 'active') {
                return !t.completed;
            }
            return t.completed;
        }));
    }

    render() {
        return (
            <View style={ styles.view }>
              <ActivityIndicator animating={ this.props.loading } color='#000' />
              <ListView dataSource={ this._getListWithFilter() } renderRow={ this._listItem } enableEmptySections={ true } />
            </View>
            );
    }
}

TodoListComponent.propTypes = {
    loading: React.PropTypes.bool.isRequired,
    list: React.PropTypes.array.isRequired,
    filter: React.PropTypes.string.isRequired,
    onTodoCompleted: React.PropTypes.func.isRequired,
    onTodoEdit: React.PropTypes.func.isRequired,
    onTodoDelete: React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    view: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        paddingLeft: 3,
        paddingRight: 3
    },
    item: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 6
    },
    itemLabel: {
        width: '100%'
    },
    footer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingLeft: 3,
        paddingRight: 3
    },
    footerFilter: {
        flex: 0,
        flexDirection: 'row'
    }
});

