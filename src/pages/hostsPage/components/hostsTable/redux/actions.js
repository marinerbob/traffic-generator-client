import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from 'utils/commonConsts';

import { getHostsList } from 'api/hosts'

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);

export const fetchHosts = () => dispatch => {
    dispatch(__fetchDataStart());
    
    getHostsList().then(data => {
        dispatch(__fetchDataFinished({
            data,
            loadingState: consts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchDataFinished({
            data: err.message,
            loadingState: consts.loadingState.LOADING_ERRORED
        }));
    })
};
