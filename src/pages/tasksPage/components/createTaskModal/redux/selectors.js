import { createSelector } from "reselect";

import { getModalVisibility } from 'reduxConfig/selectors';

import { getTasksPage } from 'pages/tasksPage/redux/selectors';

import consts from './constants';

export const getCreateTaskModal = state => getTasksPage(state).createTaskModal;
export const getModalFormState = state => getCreateTaskModal(state).modalFormState;
export const getSelects = state => getCreateTaskModal(state).selects;

export const getHostsSelectState = state => getSelects(state).hostsSelect;
export const getUsersSelectState = state => getSelects(state).usersSelect;
export const getTaskTypesSelectState = state => getSelects(state).taskTypesSelect;
export const getStatusesSelectState = state => getSelects(state).statusesSelect;

export const getCreateTaskModalVisibility = state => getModalVisibility(state, consts.CREATE_TASK_MODAL_NAME);

export const getTaskAddingStatus = state => getModalFormState(state).taskAddingStatus;
export const getFormData = state => getModalFormState(state).formData;


