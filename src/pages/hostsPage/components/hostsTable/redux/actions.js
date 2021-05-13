import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';

import fakeAPI from 'src/fakeAPI/fakeAPI.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);

export const fetchHosts = () => dispatch => {
    dispatch(__fetchDataStart());
    
    fakeAPI().getHosts().then(data => {
        dispatch(__fetchDataFinished(data));
    });
};
