import { createReducer } from '@reduxjs/toolkit';
import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from './constants';

const defaultState = {
    loadingState: consts.loadingState.LOADING_FINISHED,
    data: []
};

export default createReducer(defaultState, builder => {
    builder.addCase(FETCH_DATA_START, (state, action) => {
        state.loadingState = consts.loadingState.LOADING_STARTED;
    });

    builder.addCase(FETCH_DATA_FINISH, (state, action) => {
        let { data, loadingState } = action.payload;
        state.data = data;
        state.loadingState = loadingState;
    });
});