import {StackNavigator} from 'react-navigation';

import {HomeComponent} from '../views/Home';
import {EditTodoComponent} from '../views/EditTodo';

export const StackNavigation = StackNavigator({
    Home: {
        screen: HomeComponent
    },
    EditTodo: {
        screen: EditTodoComponent
    }
});
