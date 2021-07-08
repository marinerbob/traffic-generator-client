import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_USER_START, DELETE_USER_FINISH, DELETE_USER_REJECT } from './actionTypes';
import { getDeletedUserId } from './selectors'; 
import consts from 'utils/commonConsts';


import fakeAPI from 'src/fakeAPI/users.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);
const __deleteUserStart = createAction(DELETE_USER_START);
const __deleteUserFinish = createAction(DELETE_USER_FINISH);
const __deleteUserReject = createAction(DELETE_USER_REJECT);

export const fetchUsers = () => dispatch => {
    dispatch(__fetchDataStart());
    
    fakeAPI().getUsers().then(data => {
        dispatch(__fetchDataFinished({
            data,
            loadingState: consts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchDataFinished({
            data: err,
            loadingState: consts.loadingState.LOADING_ERRORED
        }));
    })
};

export const startUserDelete = userId => __deleteUserStart({ userId });
export const confirmUserDelete = () => (dispatch, getState) => {
    const state = getState();
    const deletedUserId = getDeletedUserId(state);

    // delete by API

    dispatch(__deleteUserFinish());
};

export const rejectUserDelete = () => __deleteUserReject();
