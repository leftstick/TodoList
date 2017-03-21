import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

export class HomeComponent extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={ styles.view }>
              <Button title='See my profile' onPress={ () => navigate('Profile') } color='#841584' accessibilityLabel='Learn more about me' />
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
