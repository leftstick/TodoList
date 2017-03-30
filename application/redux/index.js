import React from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import {StackNavigation} from '../navigation';

@connect(state => ({
    stackNav: state.stackNav
}))
export class StackNavigationState extends React.Component {
    render() {
        return (
            <StackNavigation navigation={ addNavigationHelpers({
                                  dispatch: this.props.dispatch,
                                  state: this.props.stackNav
                              }) } />
            );
    }
}

export {store} from './store';
