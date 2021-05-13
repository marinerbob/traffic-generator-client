import { createReducer } from '@reduxjs/toolkit';
import { FETCH_DATA_START, FETCH_DATA_FINISH } from './actionTypes';
import consts from './constants';

const defaultState = {
    loadingState: consts.loadingState.LOADING_FINISHED,
    data: []
};

export default createReducer(defaultState, builder => {
    builder.addCase(FETCH_DATA_START, (state, action) => {

    });

    builder.addCase(FETCH_DATA_FINISH, (state, action) => {
        state.data = action.payload;
    });
});