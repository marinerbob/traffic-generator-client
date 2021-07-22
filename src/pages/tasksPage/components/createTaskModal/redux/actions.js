import { createAction } from '@reduxjs/toolkit';

import tasksAPI from 'src/fakeAPI/tasks';
import usersAPI from 'src/fakeAPI/users';
import hostsAPI from 'src/fakeAPI/hosts';

import { fetchTasks } from 'pages/tasksPage/components/tasksTable/redux/actions';

import consts from './constants';
import commonConsts from 'utils/commonConsts';

import { fetchSelectDataStart, fetchSelectDataFinish } from 'components/connectedSelect/redux/actions.js';
import { toggleModalVisibility } from 'components/connectedModal/redux/actions';

import { CREATE_TASK_STARTED, CREATE_TASK_FINISHED } from './actionTypes';

const mapToSelect = data => data.map(el => ({ label: el.name, value: el.id }));

const __createTaskStarted = createAction(CREATE_TASK_STARTED);
const __createTaskFinished = createAction(CREATE_TASK_FINISHED);

const api = tasksAPI();
const users = usersAPI();
const hosts = hostsAPI();

export const toggleCreateTaskModal = toggleModalVisibility({ modalId: consts.CREATE_TASK_MODAL_NAME });

export const createTask = formData => dispatch => {
    dispatch(__createTaskStarted());

    api.addTask(formData).then(() => {
        dispatch(__createHostFinished({
            hostAddingStatus: consts.CREATE_HOST_FINISHED
        }));
        dispatch(toggleCreateTaskModal);
        dispatch(fetchTasks());
    })
    .catch(err => {
        dispatch(__createTaskFinished({
            hostAddingStatus: consts.CREATE_TASK_ERRORED
        }));
    })
};

const __fetchTaskTypesSelectDataStart = fetchSelectDataStart(consts.TASK_TYPES_SELECT_NAME);
const __fetchTaskTypesSelectDataFinish = fetchSelectDataFinish(consts.TASK_TYPES_SELECT_NAME);

const __fetchUsersSelectDataStart = fetchSelectDataStart(consts.USERS_SELECT_NAME);
const __fetchUsersSelectDataFinish = fetchSelectDataFinish(consts.USERS_SELECT_NAME);

const __fetchHostsSelectDataStart = fetchSelectDataStart(consts.HOSTS_SELECT_NAME);
const __fetchHostsSelectDataFinish = fetchSelectDataFinish(consts.HOSTS_SELECT_NAME);

const __fetchStatusesSelectDataStart = fetchSelectDataStart(consts.STATUSES_SELECT_NAME);
const __fetchStatusesSelectDataFinish = fetchSelectDataFinish(consts.STATUSES_SELECT_NAME);

export const fetchHostsToSelect = () => dispatch => {
    dispatch(__fetchHostsSelectDataStart());

    hosts.getHosts().then(data => {
        dispatch(__fetchHostsSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchHostsSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};

export const fetchTaskTypes = () => dispatch => {
    dispatch(__fetchTaskTypesSelectDataStart());

    api.getTaskTypes().then(data => {
        dispatch(__fetchTaskTypesSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchTaskTypesSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};

export const fetchStatuses = () => dispatch => {
    dispatch(__fetchStatusesSelectDataStart());

    api.getStatuses().then(data => {
        dispatch(__fetchStatusesSelectDataFinish({
            data: mapToSelect(data),
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchStatusesSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};

export const fetchUsers = () => dispatch => {
    dispatch(__fetchUsersSelectDataStart());

    users.getUsersForSelect().then(data => {
        dispatch(__fetchUsersSelectDataFinish({
            data,
            loadingState: commonConsts.loadingState.LOADING_FINISHED
        }));
    })
    .catch(err => {
        dispatch(__fetchUsersSelectDataFinish({
            data: [],
            loadingState: commonConsts.loadingState.LOADING_ERRORED
        }));
    });
};