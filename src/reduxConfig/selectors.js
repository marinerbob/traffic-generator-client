import { getModalIsVisible } from 'components/connectedModal/redux/selectors';

export const getRouter = state => state.router;
export const getUriPath = state => getRouter(state).location.pathname;
export const getModalsState = state => state.modals;
export const getSelectsState = state => state.selects;
export const getModalVisibility = (state, modalId) => getModalIsVisible(getModalsState(state), modalId);