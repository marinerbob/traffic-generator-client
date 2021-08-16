import { createReducer } from '@reduxjs/toolkit';

import { normalizeArr } from 'utils/reduxUtils.js';

import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from 'utils/commonConsts';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: []
};

export default createReducer(defaultState, builder => {
    builder.addCase(FETCH_DATA_START, (state) => {
        state.loadingState = consts.loadingState.LOADING_STARTED;
    });

    builder.addCase(FETCH_DATA_FINISH, (state, action) => {
        let { data, loadingState } = action.payload;

        state.data = loadingState === consts.loadingState.LOADING_FINISHED ? normalizeArr(data, 'id') : {};
        state.loadingState = loadingState;
    });
});