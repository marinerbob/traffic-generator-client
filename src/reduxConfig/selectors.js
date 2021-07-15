import { getModalIsVisible } from 'components/connectedModal/redux/selectors';

export const getModalsState = state => state.overallUI.modals;
export const getSelectsState = state => state.overallUI.selects;
export const getModalVisibility = (state, modalId) => getModalIsVisible(getModalsState(state), modalId);