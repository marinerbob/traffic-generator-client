import { createAction } from '@reduxjs/toolkit';

import { FETCH_DATA_START, FETCH_DATA_FINISH, DELETE_TASK_START, DELETE_TASK_FINISH, DELETE_TASK_REJECT } from './actionTypes';
import { getDeletedTaskId } from './selectors'; 
import consts from 'utils/commonConsts';


import fakeAPI from 'src/fakeAPI/tasks.js';

const __fetchDataFinished = createAction(FETCH_DATA_FINISH);
const __fetchDataStart = createAction(FETCH_DATA_START);
const __deleteTaskStart = createAction(DELETE_TASK_START);
const __deleteTaskFinish = createAction(DELETE_TASK_FINISH);
const __deleteTaskReject = createAction(DELETE_TASK_REJECT);

export const fetchTasks = () => dispatch => {
    dispatch(__fetchDataStart());
    
    fakeAPI().getTasks().then(data => {
        dispatch(__fetchDataFinished({
            data,
            loadingState: consts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchDataFinished({
            data: err,
            loadingState: consts.loadingState.LOADING_ERRORED
        }));
    })
};

export const startTaskDelete = taskId => __deleteTaskStart({ taskId });
export const confirmTaskDelete = () => (dispatch, getState) => {
    const state = getState();
    const deletedTaskId = getDeletedTaskId(state);

    // delete by API

    dispatch(__deleteTaskFinish());
};

export const rejectTaskDelete = () => __deleteTaskReject();
