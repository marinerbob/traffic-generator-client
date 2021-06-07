import { createAction } from '@reduxjs/toolkit';
import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from './constants';

import fakeAPI from 'src/fakeAPI/hosts.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);

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
        }))
    })
};
