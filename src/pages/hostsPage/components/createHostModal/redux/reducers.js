import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { TOGGLE_CREATE_HOST_MODAL,
    CREATE_HOST_STARTED,
    CREATE_HOST_FINISHED } from './actionTypes';

import createSelectReducer from 'components/connectedSelect/redux/reducers.js';

import consts from './constants';

const defaultState = {
    modalVisibility: false,
    hostAddingStatus: consts.CREATE_HOST_FINISHED,
    formData: {},
};

const modalFormState = createReducer(defaultState, builder => {
    builder.addCase(TOGGLE_CREATE_HOST_MODAL, state => {
        state.modalVisibility = !state.modalVisibility;
    });

    builder.addCase(CREATE_HOST_STARTED, state => {
        state.hostAddingStatus = consts.CREATE_HOST_INIT;
    });

    builder.addCase(CREATE_HOST_FINISHED, (state, action) => {
        const { hostAddingStatus } = action.payload;

        state.hostAddingStatus = hostAddingStatus;

        if (hostAddingStatus === consts.CREATE_HOST_FINISHED) {
            state.modalVisibility = false;
            state.formData = defaultState.formData;
        }
    });
});

export default combineReducers({
    modalFormState,
    usersSelect: createSelectReducer(consts.USERS_SELECT_NAME) 
})