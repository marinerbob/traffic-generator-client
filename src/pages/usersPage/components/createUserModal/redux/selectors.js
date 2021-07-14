import { createSelector } from "reselect";

import { getModalVisibility } from 'reduxConfig/selectors';

import { getUsersPage } from 'pages/usersPage/redux/selectors';

import consts from './constants';

export const getCreateUserModal = state => getUsersPage(state).createUserModal;
export const getModalFormState = state => getCreateUserModal(state).modalFormState;
export const getSelects = state => getCreateUserModal(state).selects;

export const getDepsSelectState = state => getSelects(state).departmentsSelect;
export const getOrgsSelectState = state => getSelects(state).organizationsSelect;
export const getTitlesSelectState = state => getSelects(state).titlesSelect;

export const getCreateUserModalVisibility = state => getModalVisibility(state, consts.CREATE_USER_MODAL_NAME);

export const getUserAddingStatus = state => getModalFormState(state).userAddingStatus;
export const getFormData = state => getModalFormState(state).formData;


