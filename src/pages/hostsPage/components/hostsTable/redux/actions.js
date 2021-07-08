import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_HOST_START, DELETE_HOST_FINISH, DELETE_HOST_REJECT } from './actionTypes';
import { getDeletedHostId } from './selectors'; 
import consts from 'utils/commonConsts';


import fakeAPI from 'src/fakeAPI/hosts.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);
const __deleteHostStart = createAction(DELETE_HOST_START);
const __deleteHostFinish = createAction(DELETE_HOST_FINISH);
const __deleteHostReject = createAction(DELETE_HOST_REJECT);

export const fetchHosts = () => dispatch => {
    dispatch(__fetchDataStart());
    
    fakeAPI().getHosts().then(data => {
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

export const startHostDelete = hostId => __deleteHostStart({ hostId });
export const confirmHostDelete = () => (dispatch, getState) => {
    const state = getState();
    const deletedHostId = getDeletedHostId(state);

    // delete by API

    dispatch(__deleteHostFinish());
};

export const rejectHostDelete = () => __deleteHostReject();
