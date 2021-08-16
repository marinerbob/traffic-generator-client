import { getModalVisibility } from 'reduxConfig/selectors';

import { getHostsPage } from 'pages/hostsPage/redux/selectors.js';
import { getSelectData, getSelectLoadingState } from 'components/connectedSelect/redux/selectors.js';

import consts from './constants';

export const getCreateHostModal = state => getHostsPage(state).createHostModal;
export const getModalFormState = state => getCreateHostModal(state).modalFormState;
export const getUsersSelectState = state => getCreateHostModal(state).usersSelect;

export const getCreateHostModalVisibility = state => getModalVisibility(state, consts.CREATE_HOST_MODAL_NAME);

export const getHostAddingStatus = state => getModalFormState(state).hostAddingStatus;
export const getFormData = state => getModalFormState(state).formData;
export const getFormError = state => getModalFormState(state).error;

export const getUsersSelectData = state => getSelectData(getUsersSelectState(state));
export const getUsersSelectLoadingState = state => getSelectLoadingState(getUsersSelectState(state));
