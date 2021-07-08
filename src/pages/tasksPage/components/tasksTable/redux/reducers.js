import { createReducer } from '@reduxjs/toolkit';

import { normalizeArr, deleteProp } from 'utils/reduxUtils.js';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_TASK_START, DELETE_TASK_FINISH, DELETE_TASK_REJECT } from './actionTypes';
import consts from 'utils/commonConsts';

const defaultState = {
    loadingState: consts.loadingState.LOADING_STARTED,
    data: [],
    deletedTaskId: ''
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

    builder.addCase(DELETE_TASK_START, (state, action) => {
        let { taskId } = action.payload;

        state.deletedTaskId = taskId;
    });

    builder.addCase(DELETE_TASK_FINISH, (state) => {
        state.data = deleteProp(state.data, state.deletedTaskId);

        state.deletedTaskId = defaultState.deletedTaskId;
    });

    builder.addCase(DELETE_TASK_REJECT, state => {
        state.deletedTaskId = defaultState.deletedTaskId;
    });
});