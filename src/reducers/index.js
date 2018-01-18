import {combineReducers} from 'redux';
import user from './user';
import admin from './admin';
import form from './form';
import alcos from './alcos';

export default combineReducers({
    user,
    admin,
    form,
    alcos
});
