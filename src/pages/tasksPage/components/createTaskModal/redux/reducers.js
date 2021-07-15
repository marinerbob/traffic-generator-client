import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import createSelectReducer from 'components/connectedSelect/redux/reducers.js';

import consts from './constants';

import { CREATE_TASK_STARTED,
    CREATE_TASK_FINISHED } from './actionTypes';

const defaultState = {
    taskAddingStatus: consts.CREATE_TASK_FINISHED,
    formData: {},
};

const modalFormState = createReducer(defaultState, builder => {
    builder.addCase(CREATE_TASK_STARTED, state => {
        state.taskAddingStatus = consts.CREATE_TASK_INIT;
    });

    builder.addCase(CREATE_TASK_FINISHED, (state, action) => {
        const { taskAddingStatus } = action.payload;

        state.taskAddingStatus = taskAddingStatus;

        if (taskAddingStatus === consts.CREATE_TASK_FINISHED) {
            state.formData = defaultState.formData;
        }
    });
});

const selects = combineReducers({
    taskTypesSelect: createSelectReducer(consts.TASK_TYPES_SELECT_NAME),
    hostsSelect: createSelectReducer(consts.HOSTS_SELECT_NAME),
    usersSelect: createSelectReducer(consts.USERS_SELECT_NAME)
});

export default combineReducers({
    selects,
    modalFormState
});

