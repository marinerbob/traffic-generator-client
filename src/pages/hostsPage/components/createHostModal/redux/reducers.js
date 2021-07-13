import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { CREATE_HOST_STARTED,
    CREATE_HOST_FINISHED } from './actionTypes';

import createSelectReducer from 'components/connectedSelect/redux/reducers.js';

import consts from './constants';

const defaultState = {
    hostAddingStatus: consts.CREATE_HOST_FINISHED,
    formData: {},
};

const modalFormState = createReducer(defaultState, builder => {
    builder.addCase(CREATE_HOST_STARTED, state => {
        state.hostAddingStatus = consts.CREATE_HOST_INIT;
    });

    builder.addCase(CREATE_HOST_FINISHED, (state, action) => {
        const { hostAddingStatus } = action.payload;

        state.hostAddingStatus = hostAddingStatus;

        if (hostAddingStatus === consts.CREATE_HOST_FINISHED) {
            state.formData = defaultState.formData;
        }
    });
});

export default combineReducers({
    modalFormState,
    usersSelect: createSelectReducer(consts.USERS_SELECT_NAME) 
})