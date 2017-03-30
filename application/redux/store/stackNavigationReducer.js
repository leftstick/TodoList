import {NavigationActions} from 'react-navigation';

import {StackNavigation} from '../../navigation';
import {NAV_TYPES} from '../action';

export const stackNav = (state, action) => {

    if (action.type === NAV_TYPES.GOTO_HOME) {
        return StackNavigation.router.getStateForAction(NavigationActions.back(), state);
    }

    if (action.type === NAV_TYPES.GOTO_EDIT) {
        return StackNavigation.router.getStateForAction(NavigationActions.navigate({
            routeName: 'EditTodo',
            params: {
                todo: action.payload
            }
        }), state);
    }

    return StackNavigation.router.getStateForAction(action, state);
};
