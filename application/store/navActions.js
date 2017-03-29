import {createAction} from 'redux-actions';

export const NAV_TYPES = {
    GOTO_HOME: 'GOTO_HOME',
    GOTO_EDIT: 'GOTO_EDIT'
};

export const gotoHome = createAction(NAV_TYPES.GOTO_HOME);
export const gotoEdit = createAction(NAV_TYPES.GOTO_EDIT, todo => todo);

