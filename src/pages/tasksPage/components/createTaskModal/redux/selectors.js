import { createSelector } from "reselect";

import { getModalVisibility } from 'reduxConfig/selectors';

import { getTasksPage } from 'pages/tasksPage/redux/selectors';

import consts from './constants';

export const getCreateTaskModal = state => getTasksPage(state).createTaskModal;
export const getModalFormState = state => getCreateTaskModal(state).modalFormState;
export const getSelects = state => getCreateTaskModal(state).selects;

// export const getDepsSelectState = state => getSelects(state).departmentsSelect;
// export const getOrgsSelectState = state => getSelects(state).organizationsSelect;
// export const getTitlesSelectState = state => getSelects(state).titlesSelect;

export const getCreateTaskModalVisibility = state => getModalVisibility(state, consts.CREATE_TASK_MODAL_NAME);

export const getTaskAddingStatus = state => getModalFormState(state).taskAddingStatus;
export const getFormData = state => getModalFormState(state).formData;


