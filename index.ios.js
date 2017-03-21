
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import {HomeComponent} from './application/views/Home';
import {ProfileComponent} from './application/views/Profile';

const Entry = StackNavigator({
    Home: {
        screen: HomeComponent
    },
    Profile: {
        screen: ProfileComponent
    }
});

AppRegistry.registerComponent('TheTrial', () => Entry);
