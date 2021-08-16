import { createReducer } from '@reduxjs/toolkit';

import { CREATE_HOST_STARTED, CREATE_HOST_FINISHED } from './actionTypes';

import consts from './constants';

const defaultState = {
    hostAddingStatus: consts.CREATE_HOST_FINISHED,
    formData: {},
    error: ""
};