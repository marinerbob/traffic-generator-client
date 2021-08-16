import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import { getDeletedUserId } from './selectors'; 
import consts from 'utils/commonConsts';


import fakeAPI from 'src/fakeAPI/users.js';
import { getUsersList } from 'api/users';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);

export const fetchUsers = () => dispatch => {
    dispatch(__fetchDataStart());
    
    getUsersList().then(data => {
        console.log(data);
    });

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
