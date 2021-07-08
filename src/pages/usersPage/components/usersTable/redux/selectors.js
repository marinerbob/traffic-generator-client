import { createSelector } from 'reselect';

import { getUsersPage } from 'pages/usersPage/redux/selectors';

import { getObjKeys, getObjValues } from 'utils/reduxUtils';

export const getUsersTable = state => getUsersPage(state).usersTable;

export const getUsers = state => getUsersTable(state).data;
export const getUsersIds = createSelector(getUsers, users => getObjKeys(users));
export const getUsersValues = createSelector(getUsers, users => getObjValues(users));
export const getUsersLength = createSelector(getUsersValues, users => users.length);

export const getUser = id => state => getUsers(state)[id];
export const getUserName = id => state => getUser(id)(state).fullName;

export const getLoadingState = state => getUsersTable(state).loadingState;

export const getDeletedUserId = state => getUsersTable(state).deletedUserId;