import { combineReducers } from 'redux';
import cars from './cars';
import user from './user';

export default combineReducers({
    cars,
    user
});