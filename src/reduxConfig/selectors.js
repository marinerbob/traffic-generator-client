import { getModalIsVisible } from 'components/connectedModal/redux/selectors';

export const getModalsState = state => state.modals;
export const getModalVisibility = (state, modalId) => getModalIsVisible(getModalsState(state), modalId);