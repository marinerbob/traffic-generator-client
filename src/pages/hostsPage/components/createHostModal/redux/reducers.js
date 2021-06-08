import { createReducer } from '@reduxjs/toolkit';

import { TOGGLE_CREATE_HOST_MODAL,
    CREATE_HOST_STARTED,
    CREATE_HOST_FINISHED } from './actionTypes';

import consts from './constants';

const defaultState = {
    modalVisibility: false,
    hostAddingStatus: consts.CREATE_HOST_FINISHED,
    formData: {},
};

export default createReducer(defaultState, builder => {
    builder.addCase(TOGGLE_CREATE_HOST_MODAL, state => {
        state.modalVisibility = !state.modalVisibility;
    });

    builder.addCase(CREATE_HOST_STARTED, state => {
        state.isHostAdded = consts.CREATE_HOST_INIT;
    });

    builder.addCase(CREATE_HOST_FINISHED, (state, action) => {
        const { formData, hostAddingStatus } = action.payload;
        state.formData = formData;
        state.hostAddingStatus = hostAddingStatus;
    });
});