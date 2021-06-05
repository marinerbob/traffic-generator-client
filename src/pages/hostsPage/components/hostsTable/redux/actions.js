import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from './constants';

import fakeAPI from 'src/fakeAPI/hosts.js';

export const fetchDataFinished = payload => ({
    type: FETCH_DATA_FINISH,
    payload
});

export const fetchDataStart = () => ({
    type: FETCH_DATA_START
});

export const fetchHosts = () => dispatch => {
    dispatch(fetchDataStart());
    
    fakeAPI().getHosts().then(data => {
        dispatch(fetchDataFinished({
            data,
            loadingState: consts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(fetchDataFinished({
            data: err,
            loadingState: consts.loadingState.LOADING_ERRORED
        }))
    });
};
