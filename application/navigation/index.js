import {StackNavigator} from 'react-navigation';

import {HomeView} from '../views/Home';
import {EditTodoView} from '../views/EditTodo';

export const StackNavigation = StackNavigator({
    Home: {
        screen: HomeView
    },
    EditTodo: {
        screen: EditTodoView
    }
});
