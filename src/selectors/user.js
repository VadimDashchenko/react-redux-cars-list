import { createSelector } from 'reselect';

export const getUserList = createSelector(
    state => state.user.get('userList'),
    userList => userList.toJS(),
);