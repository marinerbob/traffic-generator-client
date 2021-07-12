import { createReducer } from '@reduxjs/toolkit';

import { normalizeArr } from 'utils/reduxUtils.js';

import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';

import consts from 'utils/commonConsts';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: []
};

const createSelectReducer = selectName => {
    return createReducer(defaultState, builder => {
        builder.addCase(`${selectName}${FETCH_DATA_START}`, (state, action) => {
            state.loadingState = consts.loadingState.LOADING_STARTED;
        });
    
        builder.addCase(`${selectName}${FETCH_DATA_FINISH}`, (state, action) => {
            let { data, loadingState } = action.payload;
            state.data = data;
            state.loadingState = loadingState;
        });
    });
};

export default createSelectReducer;