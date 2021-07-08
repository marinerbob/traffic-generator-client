import { createReducer } from '@reduxjs/toolkit';

import { normalizeArr, deleteProp } from 'utils/reduxUtils.js';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_USER_START, DELETE_USER_FINISH, DELETE_USER_REJECT } from './actionTypes';
import consts from 'utils/commonConsts';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: [],
    deletedUserId: ''
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

    builder.addCase(DELETE_USER_START, (state, action) => {
        let { userId } = action.payload;

        state.deletedUserId = userId;
    });

    builder.addCase(DELETE_USER_FINISH, (state) => {
        state.data = deleteProp(state.data, state.deletedUserId);

        state.deletedUserId = defaultState.deletedUserId;
    });

    builder.addCase(DELETE_USER_REJECT, state => {
        state.deletedUserId = defaultState.deletedUserId;
    });
});