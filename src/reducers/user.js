import { USER_FETCH_USER } from '../actions/user';
import { fromJS } from 'immutable';

const initialState = fromJS({
  userList: []
});

export default ( state = initialState, action ) => {
    switch (action.type) {
        case USER_FETCH_USER: {
            return state.set('userList', fromJS(action.payload));
        }
        default:
            return state
    }
};