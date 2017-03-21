import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class ProfileComponent extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <View style={ styles.view }>
              <Text>fuck</Text>
            </View>
            );
    }
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
