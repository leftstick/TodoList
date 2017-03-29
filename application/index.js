import React from 'react';
import {Provider} from 'react-redux';
import {StackNavigationState} from './store';
import {todoStore} from './store/reducer';

export class MainEntry extends React.Component {
    render() {
        return (
            <Provider store={ todoStore }>
              <StackNavigationState />
            </Provider>
        )
    }
}
