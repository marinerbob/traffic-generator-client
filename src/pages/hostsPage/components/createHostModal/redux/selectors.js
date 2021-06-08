import { getHostsPage } from 'pages/hostsPage/redux/selectors.js';

export const getCreateHostModal = state => getHostsPage(state).createHostModal;
export const getModalVisibility = state => getCreateHostModal(state).modalVisibility;
export const getHostAddingStatus = state => getCreateHostModal(state).hostAddingStatus;
export const getFormData = state => getCreateHostModal(state).formData;