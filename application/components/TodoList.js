import React from 'react';
import {StyleSheet, View, ActivityIndicator, ListView, Button} from 'react-native';

import CheckBox from 'react-native-checkbox';

export class TodoListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    _listItem(rowData) {
        return (<View style={ styles.item }>
                  <CheckBox labelStyle={ styles.itemLabel } label={ rowData.title } checked={ rowData.completed } onChange={ (checked) => console.log('I am checked', checked) } />
                </View>);
    }

    _listFooter() {
        if (this.props.loading) {
            return;
        }
        return (
            <View style={ styles.footer }>
              <View style={ styles.footerFilter }>
                <Button onPress={ () => {
                                  } } title='All' accessibilityLabel='Select All' />
                <Button onPress={ () => {
                                  } } title='Active' accessibilityLabel='Select Active tasks' />
                <Button onPress={ () => {
                                  } } title='Completed' accessibilityLabel='Select Completed tasks' />
              </View>
            </View>);
    }

    render() {
        const listDS = this.ds.cloneWithRows(this.props.list);

        return (
            <View style={ styles.view }>
              <ActivityIndicator animating={ this.props.loading } color='#000' />
              <ListView dataSource={ listDS } renderRow={ this._listItem } enableEmptySections={ true } renderFooter={ this._listFooter.bind(this) } />
            </View>
            );
    }
}

TodoListComponent.propTypes = {
    loading: React.PropTypes.bool.isRequired,
    list: React.PropTypes.array.isRequired
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
        justifyContent: 'flex-start'
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
    },
    footerFilterBtn: {
        width: 200,
        paddingLeft: 3,
        paddingRight: 3
    }
});
