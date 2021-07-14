import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import createSelectReducer from 'components/connectedSelect/redux/reducers.js';

import consts from './constants';

import { CREATE_USER_STARTED,
    CREATE_USER_FINISHED } from './actionTypes';

const defaultState = {
    userAddingStatus: consts.CREATE_USER_FINISHED,
    formData: {},
};

const modalFormState = createReducer(defaultState, builder => {
    builder.addCase(CREATE_USER_STARTED, state => {
        state.userAddingStatus = consts.CREATE_USER_INIT;
    });

    builder.addCase(CREATE_USER_FINISHED, (state, action) => {
        const { userAddingStatus } = action.payload;

        state.userAddingStatus = userAddingStatus;

        if (userAddingStatus === consts.CREATE_USER_FINISHED) {
            state.formData = defaultState.formData;
        }
    });
});

const selects = combineReducers({
    departmentsSelect: createSelectReducer(consts.DEPS_SELECT_NAME),
    organizationsSelect: createSelectReducer(consts.ORGS_SELECT_NAME),
    titlesSelect: createSelectReducer(consts.TITLES_SELECT_NAME)
});

export default combineReducers({
    selects,
    modalFormState
});

