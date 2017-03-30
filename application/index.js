import React from 'react';
import {Provider} from 'react-redux';
import {StackNavigationState, store} from './redux';

export class MainEntry extends React.Component {
    render() {
        return (
            <Provider store={ store }>
              <StackNavigationState />
            </Provider>
        )
    }
}
