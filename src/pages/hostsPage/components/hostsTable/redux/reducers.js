import { createReducer } from '@reduxjs/toolkit';

import { normalizeArr, deleteProp } from 'utils/reduxUtils.js';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_HOST_START, DELETE_HOST_FINISH, DELETE_HOST_REJECT } from './actionTypes';
import consts from './constants';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: [],
    deletedHostId: ''
};

export default createReducer(defaultState, builder => {
    builder.addCase(FETCH_DATA_START, (state, action) => {
        state.loadingState = consts.loadingState.LOADING_STARTED;
    });

    builder.addCase(FETCH_DATA_FINISH, (state, action) => {
        let { data, loadingState } = action.payload;
        state.data = normalizeArr(data, 'id');
        state.loadingState = loadingState;
    });

    builder.addCase(DELETE_HOST_START, (state, action) => {
        let { hostId } = action.payload;

        state.deletedHostId = hostId;
    });

    builder.addCase(DELETE_HOST_FINISH, (state) => {
        state.data = deleteProp(state.data, state.deletedHostId);

        state.deletedHostId = defaultState.deletedHostId;
    });

    builder.addCase(DELETE_HOST_REJECT, state => {
        state.deletedHostId = defaultState.deletedHostId;
    });
});